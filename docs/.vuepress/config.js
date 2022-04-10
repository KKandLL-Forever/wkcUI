const navConfig = require('./config/navConfig')
const sidebarConfig = require('./config/sidebarConfig')
// const taskLists = require('markdown-it-task-lists');

module.exports = {
  base:'/wkcUI/',
  title: 'wkcUI',
  description: '学习vue',
  themeConfig: {
    lastUpdated: 'Last Updated',
    activeHeaderLinks: false,
    nav: navConfig,
    sidebar: sidebarConfig
  },
  //支持markdown的复选框语法
  markdown: {
    // plugins: ['taskLists']
    plugins: ['task-lists']
  }
}
