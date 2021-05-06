import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Layout from './layout'
import Sider from './sider'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsContent from './tabs-content'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'

Vue.use(plugin)
Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input',Input)
Vue.component('w-row',Row)
Vue.component('w-col',Col)
Vue.component('w-content', Content)
Vue.component('w-footer', Footer)
Vue.component('w-header', Header)
Vue.component('w-layout', Layout)
Vue.component('w-sider', Sider)
Vue.component('w-toast', Toast)
Vue.component('w-tabs', Tabs)
Vue.component('w-tabs-content', TabsContent)
Vue.component('w-tabs-head', TabsHead)
Vue.component('w-tabs-item', TabsItem)
Vue.component('w-tabs-body', TabsBody)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: '',
    defaultSelectedTab: 'tab2',
  },
  created(){
  },
  mounted(){
  },
  methods: {
    inputChange(e){
      console.log(e.target.value);
    },
    showToast(position){
      this.$toast('不要把广告关了',{
        closeButton: {
          text: '知道了',
          callBack(){
            console.log('ok');
          }
        },
        enableHtml: false,
        autoClose: true,
        autoCloseDelay: 50,
        position
      })
    },
    showToast1(){this.showToast('top')},
    showToast2(){this.showToast('middle')},
    showToast3(){this.showToast('bottom')}
  }
})



