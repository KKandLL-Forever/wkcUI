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
  props: {
    name: {
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
  mounted(){
  },
  methods:{
    handleClick(){
      this.$emit('stateChange:selected')
      // console.log(this.index,'menu-item index')
    },
  }
}
</script>

<style scoped lang="scss">

</style>
