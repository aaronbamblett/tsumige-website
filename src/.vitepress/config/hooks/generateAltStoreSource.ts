import type { SiteConfig } from 'vitepress'
import { Buffer } from 'node:buffer'
import { writeFileSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { Octokit } from '@octokit/rest'

const owner = 'Suwayomi'
const repo = 'Suwayomi-Tsumiru'
const bundleIdentifier = 'com.suwayomi.tachideskSorayomi'
const minOSVersion = '14.0'
const tintColor = '#7c7bff'
const maxVersions = 10

interface AltStoreVersion {
  version: string
  buildVersion: string
  date: string
  localizedDescription?: string
  downloadURL: string
  size: number
  minOSVersion: string
}

function releaseNotes(body: string | null | undefined): string {
  return (body ?? '')
    .replace(/\r\n/g, '\n')
    .split('\n## Install')[0]
    .replace(/^A manga and (?:manhwa|webtoon) reader[^\n]*\n+/, '')
    .trim()
}

async function buildNumberAt(octokit: Octokit, ref: string): Promise<string | undefined> {
  try {
    const { data } = await octokit.repos.getContent({ owner, repo, path: 'pubspec.yaml', ref })
    if (!('content' in data))
      return undefined
    const pubspec = Buffer.from(data.content, 'base64').toString('utf8')
    return /^version:\s*\S+?\+(\d+)/m.exec(pubspec)?.[1]
  }
  catch {
    return undefined
  }
}

async function generateAltStoreSource(config: SiteConfig, hostname: string) {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

  const { data: releases } = await octokit.repos.listReleases({ owner, repo, per_page: 30 })
  const versions: AltStoreVersion[] = []

  for (const release of releases) {
    if (versions.length >= maxVersions)
      break
    if (release.draft || release.prerelease)
      continue

    const ipa = release.assets.find(asset => asset.name.endsWith('-ios.ipa'))
    if (!ipa)
      continue

    const buildVersion = await buildNumberAt(octokit, release.tag_name)
    if (!buildVersion)
      continue

    const version = release.tag_name.replace(/^v/, '')
    versions.push({
      version,
      buildVersion,
      date: release.published_at ?? release.created_at,
      localizedDescription: releaseNotes(release.body),
      downloadURL: ipa.browser_download_url,
      size: ipa.size,
      minOSVersion,
    })
  }

  if (!versions.length) {
    console.warn('[altstore] skipping apps.json, no release carries an iOS .ipa')
    return
  }

  const source = {
    name: 'Tsumiru',
    subtitle: 'A manga and webtoon reader for your Suwayomi server',
    description: config.site.description,
    iconURL: `${hostname}/img/tsumiru-icon.png`,
    website: hostname,
    tintColor,
    apps: [
      {
        name: 'Tsumiru',
        bundleIdentifier,
        developerName: 'Suwayomi',
        subtitle: 'A manga and webtoon reader for your Suwayomi server',
        localizedDescription: config.site.description,
        iconURL: `${hostname}/img/tsumiru-icon.png`,
        tintColor,
        category: 'entertainment',
        versions,
        appPermissions: {
          entitlements: [],
          privacy: {
            NSPhotoLibraryAddUsageDescription: 'Save manga pages to your photo library.',
            NSPhotoLibraryUsageDescription: 'Save manga pages to your photo library.',
          },
        },
      },
    ],
    news: [],
  }

  writeFileSync(path.join(config.outDir, 'apps.json'), JSON.stringify(source, null, 2))
}

export default async function (config: SiteConfig, hostname: string) {
  try {
    await generateAltStoreSource(config, hostname)
  }
  catch (error) {
    console.warn('[altstore] skipping apps.json:', error)
  }
}
