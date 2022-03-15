<template>
  <div class="w-menu-item" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    index: String
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
    handleClick(){
      this.$emit('click:menu-item',this.index)
      console.log(this.index,'menu-item index')
    },
  }
}
</script>

<style scoped lang="scss">

</style>
