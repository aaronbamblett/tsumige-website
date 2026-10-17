import type { GetResponseDataTypeFromEndpointMethod } from '@octokit/types'
import process from 'node:process'
import { Octokit } from '@octokit/rest'
import { defineLoader } from 'vitepress'

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

type GitHubReleaseList = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.listReleases>

declare const data: GitHubReleaseList
export { data }

export default defineLoader({
  async load(): Promise<GitHubReleaseList> {
    try {
      return await octokit.paginate(octokit.repos.listReleases, {
        owner: 'aaronbamblett',
        repo: 'tsumige',
        per_page: 100,
      })
    }
    catch (error) {
      // 404 until the repo exists and has releases.
      if ((error as { status?: number }).status === 404)
        return []
      throw error
    }
  },
})
