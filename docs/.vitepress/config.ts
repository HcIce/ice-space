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
        text: 'Example',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      },
      {
        text: 'Tools',
        items: [
          { text: '代码开发规范', link: '/tools/prettier' },
        ]
      },
      {
        text: 'Vue',
        items: [
          { text: 'vue-pdf', link: '/vue/vue-pdf' },
        ]
      },
      {
        text: 'Vite',
        items: [
          { text: 'index.html注入动态信息', link: '/vite/index.html注入动态信息' },
        ]
      },
      {
        text: 'Javascript',
        items: [
          { text: 'pdf水印', link: '/js/pdf水印' },
        ]
      },
      {
        text: 'CSS',
        items: [
          { text: '背景色问题', link: '/css/背景色问题' },
        ]
      },
      {
        text: 'NPM',
        items: [
          { text: '离线安装node-sass', link: '/npm/离线安装node-sass' },
        ]
      },
      {
        text: 'Miniprogram',
        items: [
          { text: '小程序开发tip', link: '/miniprogram/小程序开发tip' },
        ]
      },
      {
        text: 'Flutter',
        items: [
          { text: '学习笔记', link: '/flutter/note_01' },
        ]
      },
      {
        text: 'Week',
        items: [
          { text: '20230714', link: '/week/20230714' },
          { text: '20230721', link: '/week/20230721' },
          { text: '20230728', link: '/week/20230728' },
          { text: '20230811', link: '/week/20230811' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HcIce' }
    ]
  }
})
