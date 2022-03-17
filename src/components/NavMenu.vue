<template>
  <div
    class="w-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  provide(){
    return {
      rootMenu: this
    }
  },
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
    // menuItems(){
    //   //确定所有的子节点
    //   return this.$children.filter(child => child.$options.name === 'MenuItem')
    // }
  },
  data() {
   return {
     child: [],
   }
  },
  mounted(){
    // console.log(this.$children,'children')
    // console.log(this.menuItems,'123')
    this.traverseChildren()
    this.handleChildrenClick()
    console.log(this.child,'child')
  },
  methods:{
    traverseChildren(){
      this.child.forEach(item =>
        // >=0 item.isSelected = true
        // <0  false
        item.isSelected = this.current.indexOf(item.menuName) >= 0
      )
    },
    handleChildrenClick(){
      this.child.forEach(item => {
        item.$on('change:selected',(data)=>{
          if (this.multiple) {
            //current里如果已经有相同name了什么也不做
            if(this.current.indexOf(data) < 0){
              let temp = JSON.parse(JSON.stringify(this.current))
              temp.push(data)
              this.$emit('update:current',temp)
            }
          }else{
            this.$emit('update:current',[data])
          }
        })
      })
    },
    collectChild(child){
      this.child.push(child)
    }
  },
  updated() {
    this.traverseChildren()
  }
}
</script>

<style scoped lang="scss">
@import '../style/NavMenu';
</style>
