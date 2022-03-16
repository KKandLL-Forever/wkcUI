<template>
  <div
    class="w-submenu"
  >
    <slot name="title"></slot>
    <slot name="default"></slot>
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
