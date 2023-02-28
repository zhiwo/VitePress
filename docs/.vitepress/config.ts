import { defineConfig } from 'vitepress'
export default defineConfig({
    lang :'zh-CN',
    title:'巧克力爱柚子',
    ignoreDeadLinks: true,
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
            {text:'Config',link:'/config/introduction',activeMatch:'/config/'},
            {text:'Program',link:'/program/vue',activeMatch:'/program/'},
            {text:'Tools',link:'/tools/git',activeMatch:'/tools/'}
        ],
        //左侧导航
        sidebar:{
            '/guide/': sidebarGuide(),
            '/config/': sidebarConfig(),
            '/program/':sidebarProgram(),
            '/tools/':sidebarTools(),
        },
        // editLink: {
        //     pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        //     text: 'Edit this page on GitHub'
        //   },
      
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
        ]
      },
   
      {
        text: 'Theme',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/guide/theme-introduction' },
        ]
      },
    ]
  }
  
  function sidebarConfig() {
    return [
      {
        text: 'Config',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/config/introduction' },
        ]
      }
    ]
  }
  /**
   * 编程
   */
  function sidebarProgram(){
     return [{
      text:'Program',
      collapsed:true,
      items:[
        { text:'Vue',link:'/program/vue',items:[{text:'事件处理',link:'/aa'}] },
        {text:'Javascript',link:'/program/Javascript'},
        {text:'Css',link:'/program/css'}
      ]
     }]
  }
  /**
   * 工具命令
   * @returns 
   */
  function sidebarTools(){
    return [{
      text:'Tools',
      collapsed:true,
      items:[
        {text:'Git',link:'/tools/git'},
        {text:'Docker',link:'/tools/docker'},
        {text:'windows命令',link:'/tools/window'}
      ]
     }]
  }