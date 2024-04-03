import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import {compareByNumber} from './utils/common'
// console.log('sideBar',sideBar);
// console.log('navBar',navBar);

// export default defineConfig({
//   title: 'sygence前端笔记',
//   description: 'A VitePress Site',
//   base: "/myBook/",
//   // 解决网络图片不显示问题
//   head: [
//     [
//       'meta',
//       {
//         name: 'referrer',
//         content: 'no-referrer'
//       }
//     ]
//   ],
//   themeConfig: {
//     // https://vitepress.dev/reference/default-theme-config
//     // nav: [
//     //   { text: 'Home', link: '/' },
//     //   { text: 'web前端', link: '/webDocs/1.HTML篇' }
//     // ],
   
//     // sidebar: {
//     //   '/backend/nestjs/': webSidebar,
//     // },
//     // sidebar: [
//     //   {
//     //     text: 'web前端',
//     //     items: [
//     //       {
//     //         text: '1.HTML',
//     //         link: '/webDocs/1.HTML篇'
//     //       },
//     //       {
//     //         text: '2.CSS',
//     //         link: '/webDocs/2.CSS篇'
//     //       },
//     //       {
//     //         text: '3.JavaScript篇',
//     //         link: '/webDocs/3.JavaScript篇'
//     //       },
//     //       {
//     //         text: '4.Vue篇',
//     //         link: '/webDocs/4.Vue篇'
//     //       },
//     //       {
//     //         text: '5.React',
//     //         link: '/webDocs/5.React篇'
//     //       },
//     //       {
//     //         text: '6.前端工程化篇',
//     //         link: '/webDocs/6.前端工程化篇'
//     //       },
//     //       {
//     //         text: '7.性能优化篇',
//     //         link: '/webDocs/7.性能优化篇'
//     //       },
//     //       {
//     //         text: '8.计算机网络篇',
//     //         link: '/webDocs/8.计算机网络篇'
//     //       },
//     //       {
//     //         text: '9.浏览器原理篇',
//     //         link: '/webDocs/9.浏览器原理篇'
//     //       },
//     //       {
//     //         text: '10.手写篇',
//     //         link: '/webDocs/10.手写篇'
//     //       },
//     //       {
//     //         text: '11.算法篇',
//     //         link: '/webDocs/11.算法篇'
//     //       }
//     //     ]
//     //   },
      
//     // ],

//     socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
//   }

// })

export default defineConfig({
  
  title: 'sygence前端笔记',
  description: 'A VitePress Site',
  base: "/myBook/",
  // 解决网络图片不显示问题
  head: [
    [
      'meta',
      {
        name: 'referrer',
        content: 'no-referrer'
      }
    ]
  ],
  themeConfig: {
        nav: [
      { text: 'Home', link: '/' },
      { text: 'web前端', link: '/webDocs/前端基础/1.HTML篇' }
    ],
  },
  vite: {
    plugins: [
      AutoSidebar({
        deletePrefix: '',
        collapsed: true,
        beforeCreateSideBarItems: (data:string[]) => {
          console.log('data', data);
          return data.sort(compareByNumber)
          
        } 
        // You can also set options to adjust sidebar data
        // 需要修改默认配置，请自行参照仓库的配置表
      })
    ]
  },
})
