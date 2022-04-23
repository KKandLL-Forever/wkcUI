import Vue from "vue";
import App from "./App.vue";
import 'normalize.css'

import Button from './components/Button'
import Icon from './components/icon'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Row from './components/Layout/row'
import Col from './components/Layout/col'
import Content from './components/Container/content'
import Footer from './components/Container/footer'
import Header from './components/Container/header'
import Container from './components/Container/Container'
import Sider from './components/Container/sider'
// import Toast from './toast'
// import plugin from './plugin'
import Tabs from './components/Tabs/tabs'
import TabsHead from './components/Tabs/tabs-head'
import TabsContent from './components/Tabs/tabs-content'
import TabsItem from './components/Tabs/tabs-item'
import TabsBody from './components/Tabs/tabs-body'
import NavMenu from './components/NavMenu/NavMenu'
import MenuItem from './components/NavMenu/MenuItem'
import SubMenu from './components/NavMenu/SubMenu'
import Table from './components/Table/Table'

// Vue.use(plugin)
Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input',Input)
Vue.component('w-row',Row)
Vue.component('w-col',Col)
Vue.component('w-content', Content)
Vue.component('w-footer', Footer)
Vue.component('w-header', Header)
Vue.component('w-container', Container)
Vue.component('w-sider', Sider)
// Vue.component('w-toast', Toast)
Vue.component('w-tabs', Tabs)
Vue.component('w-tabs-content', TabsContent)
Vue.component('w-tabs-head', TabsHead)
Vue.component('w-tabs-item', TabsItem)
Vue.component('w-tabs-body', TabsBody)
Vue.component('w-menu', NavMenu)
Vue.component('w-submenu', SubMenu)
Vue.component('w-menu-item', MenuItem)
Vue.component('w-table', Table)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
