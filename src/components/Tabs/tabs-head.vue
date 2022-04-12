<template>
  <div class="tabs-head" ref="head">
    <div class="tabsLine" ref="tabsLine"></div>
    <slot></slot>
    <div class="actionWrapper">
      <slot name="extraAction"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabs-head",
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected', (child,item)=>{
        let {width,height,top,left} = item.$el.getBoundingClientRect()
        let { left: left2 } = this.$refs.head.getBoundingClientRect()
        this.$refs.tabsLine.style.width = `${width}px`
        this.$refs.tabsLine.style.left = `${left-left2}px`
      })
    }
  }
</script>

<style scoped lang="scss">
  $tab-height: 40px;
  $blue: #108EE9;
  .tabs-head{
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #dddddd;
    >.actionWrapper{
      margin-left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1em;
    }
    >.tabsLine{
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      transition: all 0.25s;
    }
  }

</style>
