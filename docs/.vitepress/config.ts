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
      { text: 'Vue', link: '/vue/vue-pdf' }
    ],

    sidebar: [
      {
        text: 'Vue',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'vue-pdf', link: '/vue/vue-pdf' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HcIce' }
    ]
  }
})
