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
  mounted(){
  },
  methods:{
    handleClick(){
      this.$emit('change:selected',this.menuName)
    },
  }
}
</script>

<style scoped lang="scss">

</style>
