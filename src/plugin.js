import Toast from './toast'

let currentToast
export default {
  install(Vue,options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if(currentToast){
        currentToast.close()
      }
      currentToast = creatToast({Vue, message, propsData:toastOptions,onClose: ()=>{currentToast = null}})
    }

  }
}

// Help function
function creatToast({Vue, message, propsData,onClose}) {
  let constructor = Vue.extend(Toast)
  let toast = new constructor({propsData})
  toast.$slots.default = message
  toast.$mount()
  toast.$on('beforeClose',onClose)
  document.body.appendChild(toast.$el)
  return toast
}









  // install(Vue,options){
  //   Vue.prototype.$toast = function (message,toastOptions) {
  //     //下面是一个动态生成实例的例子(生成一个toast组件并放到document.body中)
  //     //新建一个Toast组件的实例toast
  //     let Constructor = Vue.extend(Toast)
  //     let toast = new Constructor({
  //       propsData:toastOptions
  //     })
  //     //设置toast的默认信息为传进来的[message]
  //     toast.$slots.default = message
  //     //挂载toast
  //     toast.$mount()
  //     //生成toast组件中的html
  //     document.body.appendChild(toast.$el)
  //   }
  // }
