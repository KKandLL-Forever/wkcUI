module.exports = {
  base:'/Components-practice/',
  title: 'wkcUI',
  description: '学习vue',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/Jiansitewang/Components-practice' },
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/grid',
          '/components/input',
          '/components/layout',
          '/components/toast',
          '/components/tabs',
        ]
      }
    ],
  }
}
