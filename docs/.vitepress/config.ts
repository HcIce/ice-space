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
      { text: 'Code', link: '/code/vue/vue-pdf' },
      { text: 'Engineering', link: '/engineering/本地开发更新' }
    ],

    sidebar: {
      '/code/':
        [
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
              { text: '代码开发规范', link: '/code/tools/prettier' },
            ]
          },
          {
            text: 'Vue',
            items: [
              { text: 'vue-pdf', link: '/code/vue/vue-pdf' },
            ]
          },
          {
            text: 'Vite',
            items: [
              { text: 'index.html注入动态信息', link: '/code/vite/index.html注入动态信息' },
            ]
          },
          {
            text: 'Javascript',
            items: [
              { text: 'pdf水印', link: '/code/js/pdf水印' },
            ]
          },
          {
            text: 'CSS',
            items: [
              { text: '背景色问题', link: '/code/css/背景色问题' },
            ]
          },
          {
            text: 'NPM',
            items: [
              { text: '离线安装node-sass', link: '/code/npm/离线安装node-sass' },
            ]
          },
          {
            text: 'Miniprogram',
            items: [
              { text: '小程序开发tip', link: '/code/miniprogram/小程序开发tip' },
            ]
          },
          {
            text: 'Flutter',
            items: [
              { text: '学习笔记', link: '/code/flutter/note_01' },
            ]
          },
          {
            text: 'Week',
            items: [
              { text: '20230714', link: '/code/week/20230714' },
              { text: '20230721', link: '/code/week/20230721' },
              { text: '20230728', link: '/code/week/20230728' },
              { text: '20230811', link: '/code/week/20230811' },
            ]
          },
        ],
      '/engineering/': [
        {
          text: 'Example',
          items: [
            { text: '本地开发更新', link: '/engineering/本地开发更新' },
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HcIce' }
    ]
  }
})
