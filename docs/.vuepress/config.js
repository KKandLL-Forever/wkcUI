const navConfig = require('./config/navConfig')
const sidebarConfig = require('./config/sidebarConfig')

module.exports = {
  base:'/wkcUI/',
  title: 'wkcUI',
  description: '学习vue',
  themeConfig: {
    lastUpdated: 'Last Updated',
    activeHeaderLinks: false,
    nav: navConfig,
    sidebar: sidebarConfig
  }
}
