import type { GetResponseDataTypeFromEndpointMethod } from '@octokit/types'
import process from 'node:process'
import { Octokit } from '@octokit/rest'
import { defineLoader } from 'vitepress'

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

type GitHubRelease = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.getLatestRelease>

export type AppRelease = GitHubRelease | null

declare const data: AppRelease
export { data }

export default defineLoader({
  async load(): Promise<AppRelease> {
    try {
      const { data } = await octokit.repos.getLatestRelease({
        owner: 'aaronbamblett',
        repo: 'tsumige',
      })
      return data
    }
    catch (error) {
      // GitHub answers 404 while the repo has no releases.
      if ((error as { status?: number }).status === 404)
        return null
      throw error
    }
  },
})
