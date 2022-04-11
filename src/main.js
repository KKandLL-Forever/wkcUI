import Vue from "vue";
import App from "./App.vue";

import Button from './components/Button'
import Icon from './components/icon'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Row from './components/row'
import Col from './components/col'
import Content from './components/content'
import Footer from './components/footer'
import Header from './components/header'
import Container from './components/Container'
import Sider from './components/sider'
// import Toast from './toast'
// import plugin from './plugin'
// import Tabs from './tabs'
// import TabsHead from './tabs-head'
// import TabsContent from './tabs-content'
// import TabsItem from './tabs-item'
// import TabsBody from './tabs-body'
import NavMenu from './components/NavMenu'
import MenuItem from './components/MenuItem'
import SubMenu from './components/SubMenu'

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
// Vue.component('w-tabs', Tabs)
// Vue.component('w-tabs-content', TabsContent)
// Vue.component('w-tabs-head', TabsHead)
// Vue.component('w-tabs-item', TabsItem)
// Vue.component('w-tabs-body', TabsBody)
Vue.component('w-menu', NavMenu)
Vue.component('w-submenu', SubMenu)
Vue.component('w-menu-item', MenuItem)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
