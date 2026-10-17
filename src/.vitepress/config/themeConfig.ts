import type { DefaultTheme } from 'vitepress'

import nav from './navigation/navbar'
import sidebar from './navigation/sidebar'

const themeConfig: DefaultTheme.Config = {
  logo: {
    src: '/img/logo-128px.png',
    width: 24,
    height: 24,
  },

  nav,
  sidebar,

  outline: [2, 3],

  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/Suwayomi/Suwayomi-Tsumiru',
      ariaLabel: 'Project GitHub',
    },
    {
      icon: 'discord',
      // #suwayomi-tsumiru channel on the Suwayomi Discord.
      link: 'https://discord.com/invite/DDZdqZWaHA',
      ariaLabel: 'Suwayomi Discord (#suwayomi-tsumiru)',
    },
  ],

  footer: {
    message: '<a href="https://www.mozilla.org/en-US/MPL/2.0/" target="_blank">Open-source MPL-2.0 Licensed</a> <span class="divider">|</span> <a href="/privacy/">Privacy policy</a>',
    copyright: `Copyright © ${new Date().getFullYear()} Tsumiru`,
  },

  editLink: {
    pattern: 'https://github.com/tsumiru-app/tsumiru-app.github.io/edit/main/src/:path',
    text: 'Help us improve this page',
  },

  lastUpdated: {
    text: 'Last updated',
    formatOptions: {
      forceLocale: true,
      dateStyle: 'long',
      timeStyle: 'short',
    },
  },

  search: {
    provider: 'local',
  },
}

export default themeConfig
