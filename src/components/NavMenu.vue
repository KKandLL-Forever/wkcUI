<template>
  <div
    class="w-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: {
    current: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  computed:{
    menuItems(){
      //确定所有的子节点
      return this.$children.filter(child => child.$options.name === 'MenuItem')
    }
  },
  data() {
   return {
   }
  },
  mounted(){
    console.log(this.$children,'children')
    console.log(this.menuItems,'123')
    this.menuItems.forEach(item => {
      if(this.current.indexOf(item.name) >= 0){
        item.isSelected = true
      }
    })
    
  },
  methods:{
  }
}
</script>

<style scoped lang="scss">
@import '../style/NavMenu';
</style>
