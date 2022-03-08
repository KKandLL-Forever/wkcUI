<template>
  <div class="w-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'wkcButtonGroup',
    mounted () {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if (name !== 'button') {
          console.warn(`w-button-group 的子元素应该全是 w-button，但是你写的是 ${name}`)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
@import "src/var";
  .w-button-group {
    --border-radius: 4px;
    display: inline-flex;
    vertical-align: middle;
    > .w-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: $--border-radius-base;
        border-bottom-left-radius: $--border-radius-base;
      }
      &:last-child {
        border-top-right-radius: $--border-radius-base;
        border-bottom-right-radius: $--border-radius-base;
      }
      &:hover {
        position: relative;
        z-index: 1;
        cursor: pointer;
      }
    }
  }
</style>
