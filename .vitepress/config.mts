import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/zx/',
  outDir: 'docs',
  cleanUrls: true,
  title: 'google/zx',
  titleTemplate: ':title | google/zx',
  description: 'A tool for writing better scripts',
  head: [
    ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/zx/img/favicons/apple-touch-icon.png'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/zx/img/favicons/favicon-32x32.png'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/zx/img/favicons/favicon-16x16.png'}],
    ['link', {rel: 'mask-icon', href: '/zx/img/favicons/safari-pinned-tab.svg', color: '#3a0839'}],
    ['link', {rel: 'shortcut icon', href: '/zx/img/favicons/favicon.ico'}],
    ['meta', {name: 'og:image', content: '/zx/img/og-image.png'}],
  ],
  themeConfig: {
    logo: '/img/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Docs', link: '/getting-started'},
      {
        text: '7.x',
        items: [
          {text: 'Releases', link: 'https://github.com/google/zx/releases'},
        ],
      },
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          {text: 'Getting Started', link: '/getting-started'},
          {text: 'Process Promise', link: '/process-promise'},
          {text: 'API Reference', link: '/api'},
          {text: 'Configuration', link: '/configuration'},
          {text: 'CLI Usage', link: '/cli'},
        ],
      },
      {
        text: 'FAQ',
        link: '/faq',
        items: [
          {text: 'Quotes', link: '/quotes'},
          {text: 'TypeScript', link: '/typescript'},
          {text: 'Markdown Scripts', link: '/markdown-scripts'},
          {text: 'Known Issues', link: '/known-issues'},
        ],
      },
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/google/zx'},
    ],

    editLink: {
      pattern: 'https://github.com/google/zx/blob/gh-pages/:path',
    },

    footer: {
      message: 'Disclaimer: This is not an officially supported Google product.',
    },

    search: {
      provider: 'local',
    },
  },
})
