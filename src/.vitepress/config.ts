import process from 'node:process'
import { fileURLToPath, URL } from 'node:url'
import { Octokit } from '@octokit/rest'
import ElementPlus from 'unplugin-element-plus/vite'
import { defineConfig, loadEnv } from 'vitepress'

// Theme related config
import headConfig from './config/headConfig'

// Enhanced meta generation
import generateMeta from './config/hooks/generateMeta'

// Provides how to generate Meta head tags
import generateOgImages from './config/hooks/generateOgImages'

import markdownConfig from './config/markdownConfig'

// For use with loading Markdown plugins
import themeConfig from './config/themeConfig'

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
const releaseDateCache = new Map<string, string>()

const title = 'Tsumige'
const description = 'Tsumige is an open source library and launcher for your visual novels, with one goal: every VN you own in one place.'

const env = loadEnv('', process.cwd())
const hostname: string = env.VITE_HOSTNAME || 'http://localhost:4173'

export default defineConfig({
  outDir: '../dist',
  lastUpdated: true,
  cleanUrls: true,
  // Royal is a dark brand: default to dark, but keep the toggle.
  appearance: 'dark',
  title,
  description,
  sitemap: {
    hostname,
  },
  head: headConfig,
  markdown: markdownConfig,
  themeConfig,
  transformPageData: async (pageData) => {
    if (pageData.filePath === 'changelogs/[tag].md') {
      const tag = (pageData as any).params?.tag as string | undefined
      if (tag) {
        const version = tag.startsWith('v') ? tag.slice(1) : tag
        pageData.frontmatter ||= {}
        pageData.frontmatter.title = `v${version}`

        let publishedAt = releaseDateCache.get(tag)
        if (!publishedAt) {
          try {
            const { data } = await octokit.repos.getReleaseByTag({ owner: 'aaronbamblett', repo: 'tsumige', tag })
            publishedAt = data.published_at || data.created_at || ''
            if (publishedAt)
              releaseDateCache.set(tag, publishedAt)
          }
          catch {}
        }

        const prettyDate = publishedAt
          ? new Date(publishedAt).toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' })
          : undefined

        const versionLabel = tag
        const desc = prettyDate
          ? `Changelog for Tsumige ${versionLabel}, released on ${prettyDate}`
          : `Changelog for Tsumige ${versionLabel}`

        pageData.frontmatter.description = pageData.frontmatter.description || desc
        pageData.title = pageData.frontmatter.title
        pageData.description = pageData.frontmatter.description
      }
    }
    return pageData
  },
  transformHead: async context => generateMeta(context, hostname),
  buildEnd: async (context) => {
    await generateOgImages(context)
  },
  vite: {
    resolve: {
      alias: [
        {
          // Used to show the release version on navbar.
          find: /^.*\/VPNavBarMenu\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/CustomNavBarMenu.vue', import.meta.url),
          ),
        },
        {
          find: /^.*VPNavScreenMenu\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/CustomNavScreenMenu.vue', import.meta.url),
          ),
        },
        {
          find: /^.*VPSwitchAppearance\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/CustomSwitchAppearance.vue', import.meta.url),
          ),
        },
      ],
    },
    plugins: [ElementPlus({})],
    ssr: {
      noExternal: ['element-plus'],
    },
  },
})
