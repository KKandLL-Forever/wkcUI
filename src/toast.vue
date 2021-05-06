<template>
  <div class="wrapper" :class="toastPosition">
    <div class="toast" ref="toast" >
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
      </span>
    </div>
  </div>


</template>

<script>
  export default {
    name: "toast.vue",
    props:{
      autoClose:{
        type: Boolean,
        default: true
      },
      autoCloseDelay:{
        type: Number,
        default: 5
      },
      closeButton:{
        type: Object,
        default(){
          return {
            text: '关闭',
            callBack: undefined
          }
        }
      },
      enableHtml:{
        type: Boolean,
        default: false
      },
      position:{
        type: String,
        default: 'top',
        validator(value){
          return ['top','bottom','middle'].indexOf(value) >= 0
        }
      }
    },
    mounted() {
      this.lineHeightRepair()
      this.execAutoClose()
    },
    computed:{
      toastPosition(){
        return {
          [`position-${this.position}`]:true
        }
      }
    },
    methods:{
      close(){
        this.$el.remove()
        this.$emit('beforeClose')
        this.$destroy
      },
      onClickClose(){
        this.close()
        if (this.closeButton && typeof this.closeButton.callBack === 'function'){
          this.closeButton.callBack()
        }
      },
      lineHeightRepair(){
        this.$nextTick(()=>{
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
        })
      },
      execAutoClose(){
        if (this.autoClose){
          setTimeout(()=>{
            this.close()
          },this.autoCloseDelay*1000)
        }
      },
    }
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0,0,0,0.75);
  $animationDuration: .5s;
  .wrapper{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    &.position-top{
      z-index: 1000;
      top: 0;
      .toast{
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        animation: slide-down $animationDuration;
      }
    }
    &.position-bottom{
      bottom: 0;
      .toast{
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        animation: slide-up $animationDuration;
      }
    }
    &.position-middle{
      top: 50%;
      transform: translate(-50%,-50%);
      .toast{
        animation: fade-in $animationDuration;
      }
    }
  }
  .toast{
    display: flex;
    align-items: center;
    font-size: $font-size;
    line-height: 1.8;
    min-height: $toast-height;
    color: white;
    padding: 0 16px;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
    .close{
      padding-left: 16px;
      flex-shrink: 0;
    }
    .line{
      height: 100%;
      border-left: 1px solid #666;
      margin-left: 16px;
    }
    .message{
      padding: 8px 0;
    }

  }
  @keyframes slide-up {
    0% {opacity: 0;transform: translateY(100%)}
    100% {opacity: 1; transform: translateY(0)}
  }
  @keyframes slide-down {
    0% {opacity: 0;transform: translateY(-100%)}
    100% {opacity: 1; transform: translateY(0%)}
  }
  @keyframes fade-in {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }


</style>
