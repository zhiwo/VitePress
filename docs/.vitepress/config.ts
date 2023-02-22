import { defineConfig } from 'vitepress'
export default defineConfig({
    lang :'zh-CN',
    title:'Vue3-Vite-Cli 中文文档',
    description:'基于vite为基础搭建的风格脚手架,提供多种模板以便于更高效的解决业务需求！',
    lastUpdated:true,
    cleanUrls:true,
    head:[['meta',{name:'theme-color',content:'#3c7772'}]],

    markdown:{
        headers:{
            level:[0,0]
        }
    },
    themeConfig:{
        //头部导航
        nav:[
            {text: 'Guide', link: '/guide/what-is-vitepress', activeMatch: '/guide/'},
            {text:'Config',link:'/config/introduction',activeMatch:'/config/'}
        ],
        //左侧导航
        sidebar:{
            '/guide/': sidebarGuide(),
            '/config/': sidebarConfig()
        },
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
          },
      
          socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
          ],
      
          footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
          },
      
    }
})
function sidebarGuide() {
    return [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Configuration', link: '/guide/configuration' },
          { text: 'Routing', link: '/guide/routing' },
          { text: 'Deploying', link: '/guide/deploying' },
          { text: 'Internationalization', link: '/guide/i18n' }
        ]
      },
      {
        text: 'Writing',
        collapsed: true,
        items: [
          { text: 'Markdown', link: '/guide/markdown' },
          { text: 'Asset Handling', link: '/guide/asset-handling' },
          { text: 'Frontmatter', link: '/guide/frontmatter' },
          { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
          { text: 'API Reference', link: '/guide/api' }
        ]
      },
      {
        text: 'Theme',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/guide/theme-introduction' },
          { text: 'Nav', link: '/guide/theme-nav' },
          { text: 'Sidebar', link: '/guide/theme-sidebar' },
          { text: 'Prev Next Link', link: '/guide/theme-prev-next-link' },
          { text: 'Edit Link', link: '/guide/theme-edit-link' },
          { text: 'Last Updated', link: '/guide/theme-last-updated' },
          { text: 'Layout', link: '/guide/theme-layout' },
          { text: 'Home Page', link: '/guide/theme-home-page' },
          { text: 'Team Page', link: '/guide/theme-team-page' },
          { text: 'Badge', link: '/guide/theme-badge' },
          { text: 'Footer', link: '/guide/theme-footer' },
          { text: 'Search', link: '/guide/theme-search' },
          { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' }
        ]
      },
      {
        text: 'Migrations',
        collapsed: false,
        items: [
          {
            text: 'Migration from VuePress',
            link: '/guide/migration-from-vuepress'
          },
          {
            text: 'Migration from VitePress 0.x',
            link: '/guide/migration-from-vitepress-0'
          }
        ]
      }
    ]
  }
  
  function sidebarConfig() {
    return [
      {
        text: 'Config',
        items: [
          { text: 'Introduction', link: '/config/introduction' },
          { text: 'App Configs', link: '/config/app-configs' },
          { text: 'Theme Configs', link: '/config/theme-configs' },
          { text: 'Frontmatter Configs', link: '/config/frontmatter-configs' }
        ]
      }
    ]
  }