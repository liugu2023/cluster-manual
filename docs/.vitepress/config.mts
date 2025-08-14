import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '燕山大学GPU集群用户手册',
  description: '燕山大学计算机学科GPU集群使用指南',
  lang: 'zh-CN',
  base: '/',
  cleanUrls: true,
  
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '燕山大学GPU集群',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '用户手册', link: '/manual/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/manual/': [
        {
          text: '集群用户服务条款',
          link: '/manual/terms'
        },
        {
          text: '集群硬件综述',
          link: '/manual/hardware/'
        },
        {
          text: '集群软件综述',
          link: '/manual/software/'
        },
        {
          text: '上机说明',
          link: '/manual/access/'
        },
        {
          text: '作业调度系统使用',
          link: '/manual/slurm/'
        },
        {
          text: 'SCOW系统使用',
          link: '/manual/scow/'
        },
        {
          text: 'Q&A',
          link: '/manual/qa'
        }
      ]
    },





    search: {
      provider: 'local'
    },
    
    footer: {
      message: '燕山大学计算机学科GPU集群用户手册',
      copyright: 'Copyright © 2024 燕山大学'
    },
    
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    outline: {
      label: '页面导航'
    },
    
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  },

  markdown: {
    config: (md) => {
      // Mermaid 支持将在后续配置中添加
    }
  }
})