import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.SidebarMulti = {
  '/download/': defaultSidebar(),
  '/docs/': defaultSidebar(),
  '/changelogs/': defaultSidebar(),
}

function defaultSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        {
          text: 'Download',
          link: '/download/',
        },
        {
          text: 'Changelogs',
          link: '/changelogs/',
        },
      ],
    },
    {
      text: 'Guides',
      items: [
        {
          text: 'Getting started',
          link: '/docs/guides/getting-started',
        },
        {
          text: 'Adding games',
          link: '/docs/guides/adding-games',
        },
        {
          text: 'Folder import',
          link: '/docs/guides/folder-import',
        },
        {
          text: 'Episode groups',
          link: '/docs/guides/episode-groups',
        },
        {
          text: 'Launch settings',
          link: '/docs/guides/launch-settings',
        },
        {
          text: 'Cover art',
          link: '/docs/guides/cover-art',
        },
        {
          text: 'Playtime',
          link: '/docs/guides/playtime',
        },
        {
          text: 'Troubleshooting',
          link: '/docs/guides/troubleshooting',
        },
      ],
    },
    {
      text: 'Frequently Asked Questions',
      items: [
        { text: 'FAQ', link: '/docs/faq/' },
      ],
    },
  ]
}

export default sidebar
