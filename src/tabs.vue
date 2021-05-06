<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "tabs",
    props: {
      selected:{
        type: String,
        require: true
      },
      direction:{
        type: String,
        default:'horizontal',
        validator(value){
          return ['horizontal','vertical'].indexOf(value) >= 0
        }
      }
    },
    data(){
      return {
        eventBus: new Vue()
      }
    },
    provide(){
      return {
        eventBus: this.eventBus
      }
    },
    created(){

    },
    mounted() {
      if (this.$children.length === 0){
        console && console.warn &&
        console.warn('tabs没有子组件')}
      this.$children.forEach((child)=>{
        if (child.$options.name === 'tabs-head'){
          child.$children.forEach((item)=>{
            if (item.$options.name === 'tabs-item' && item.$props.name === this.selected) {
              this.eventBus.$emit('update:selected',this.selected,item)
            }
          })
        }
      })
    },

  }
</script>

<style scoped>

</style>
