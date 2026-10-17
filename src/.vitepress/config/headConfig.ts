import type { HeadConfig } from 'vitepress'

const headConfig: HeadConfig[] = [
  ['meta', { name: 'darkreader-lock' }],
  ['meta', { name: 'theme-color', content: '#0d0b16' }],
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
  ['meta', { name: 'twitter:card', content: 'summary' }],
  ['meta', { property: 'og:site_name', content: 'Tsumige' }],
  ['meta', { property: 'og:description', content: 'Add a game and Tsumige downloads its cover art, description, tags and rating from VNDB. Then it launches the game with the right settings and logs your playtime.' }],
  ['meta', { property: 'og:locale', content: 'en_US' }],
  ['meta', { property: 'og:type', content: 'website' }],
]

export default headConfig
