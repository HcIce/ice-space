import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ice Maker",
  description: "doc for ice",
  base: '/ice-space/',
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      // would render:
      //
      // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Week', link: '/vue/vue-pdf' }
    ],

    sidebar: [
      {
        text: 'Tour',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      },
      {
        text: 'Week',
        items: [
          { text: 'vue-pdf', link: '/vue/vue-pdf' },
          { text: '20230714', link: '/week/20230714' },
          { text: '20230721', link: '/week/20230721' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HcIce' }
    ]
  }
})
