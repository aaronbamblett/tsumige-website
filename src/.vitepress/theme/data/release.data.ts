import type { GetResponseDataTypeFromEndpointMethod } from '@octokit/types'
import { Octokit } from '@octokit/rest'
import { defineLoader } from 'vitepress'

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

type GitHubRelease = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.getLatestRelease>

export interface AppRelease {
  stable: GitHubRelease
  beta: GitHubRelease
}

declare const data: AppRelease
export { data }

export default defineLoader({
  async load(): Promise<AppRelease> {
    const { data: stable } = await octokit.repos.getLatestRelease({
      owner: 'Suwayomi',
      repo: 'Suwayomi-Tsumiru',
    })

    // Tsumiru has no separate preview/beta channel; mirror the stable release.
    const beta = stable

    return { stable, beta }
  },
})
