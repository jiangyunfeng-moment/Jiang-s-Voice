import { defineConfig } from 'vitepress'

export default defineConfig({
  // 本地运行，无需修改
  base: '/Jiang-s-Voice/',
  title: "江云风",
  description: "心情随笔 | Java 程序员学习笔记",

  // 👇 所有导航、侧边栏 必须写在 themeConfig 里！
  themeConfig: {
    // ✅ 顶部导航（正常显示）
    nav: [
      { text: '首页', link: '/' },
      { text: '心情随笔', link: '/mood/' },
      { text: '码农笔记', link: '/java/' }
    ],

    // ✅ 侧边栏目录
    sidebar: {
      '/mood/': [
        {
          text: '📝 心情随笔',
          collapsible: true,
          items: [
            { text: '目录总览', link: '/mood/' }
          ]
        }
      ],
      '/java/': [
        {
          text: '💻 码农技术栈',
          collapsible: true,
          items: [
            { text: '目录总览', link: '/java/' }
          ]
        }
      ]
    },

    // 社交链接
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/' }
    // ],
    // 页脚
    footer: { copyright: 'Copyright © 2026 个人博客' }
  },

  // 代码行号
  markdown: { lineNumbers: true }
})