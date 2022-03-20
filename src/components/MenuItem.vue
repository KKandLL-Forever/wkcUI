<template>
  <div
    class="w-menu-item"
    :class="[isSelected?'is-selected':'']"
    @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  inject:['rootMenu'],
  props: {
    menuName: {
      type:String,
      require: true
    },
  },
  computed:{
  },
  data() {
   return {
     isSelected: false
   }
  },
  watch: {
  },
  created() {
    this.rootMenu.collectChild(this)
  },
  mounted(){
    // console.log(this.rootMenu)
  },
  methods:{
    handleClick(){
      this.rootMenu.actionPath = []
      this.$parent.handleActionPathChange && this.$parent.handleActionPathChange()
      this.$emit('change:selected',this.menuName)
    },
  }
}
</script>

<style scoped lang="scss">

</style>
