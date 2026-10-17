import process from 'node:process'
import { Octokit } from '@octokit/rest'

export default {
  async paths() {
    // Unauthenticated requests share a tiny per-IP rate limit; use a token when one is around.
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
    let releases
    try {
      releases = await octokit.paginate(octokit.repos.listReleases, {
        owner: 'aaronbamblett',
        repo: 'tsumige',
        per_page: 100,
      })
    }
    catch (error) {
      // 404 until the repo exists and has releases.
      if ((error as { status?: number }).status !== 404)
        throw error
      releases = []
    }

    return releases
      .filter(r => !!r.tag_name)
      .map(r => ({ params: { tag: r.tag_name } }))
  },
}
