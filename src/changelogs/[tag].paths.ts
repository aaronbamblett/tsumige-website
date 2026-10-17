import { Octokit } from '@octokit/rest'

export default {
  async paths() {
    // Unauthenticated requests share a tiny per-IP rate limit; use a token when one is around.
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
    const releases = await octokit.paginate(octokit.repos.listReleases, {
      owner: 'Suwayomi',
      repo: 'Suwayomi-Tsumiru',
      per_page: 100,
    })

    return releases
      .filter(r => !!r.tag_name)
      .map(r => ({ params: { tag: r.tag_name } }))
  },
}
