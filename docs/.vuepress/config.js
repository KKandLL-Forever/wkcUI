module.exports = {
  base:'/wkcUI/',
  title: 'wkcUI',
  description: '学习vue',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '开发计划',
        link: '/plan/'
      },
      {
        text: '前端',
        link: '/frontend/'
      },
      {
        text: '开发小记',
        items:[
          {text: 'Button',link: '/button/'},
          {text: 'NavMenu',link: '/nav-menu/'},
          {text: 'Input',link: '/records/'},
        ]
      },
      { text: 'Github', link: 'https://github.com/KKandLL-forever/wkcUI' },
    ],
    sidebar: {
      '/records/': [
        '',     /* /foo/ */
        'input',  /* /foo/one.html */
      ],
  
      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],
    }
    // sidebar: 'auto'
    // sidebar: [
    //   {
    //     title: '入门',
    //     collapsable: false,
    //     children: [
    //       '/install/',
    //       '/get-started/',
    //     ]
    //   },
    //   {
    //     title: '组件',
    //     collapsable: false,
    //     children: [
    //       '/components/button',
    //       '/components/grid',
    //       '/components/input',
    //       '/components/layout',
    //       '/components/toast',
    //       '/components/tabs',
    //     ]
    //   }
    // ],
  }
}
