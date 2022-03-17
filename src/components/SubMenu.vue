<template>
  <div
    class="w-submenu"
  >
    <div class="w-submenu__title">
      <slot name="title"></slot>
    </div>
    <div>
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubMenu",
  props: {
    index: {
      type: String
    }
  },
  computed:{
  },
  data() {
   return {
   }
  },
  mounted(){
  },
  methods:{
    // handleClick(){
    //   this.$emit('click:submenu',this.index)
    //   console.log(this.index,'submenu index')
    // },
  }
}
</script>

<style scoped lang="scss">

</style>
