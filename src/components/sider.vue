<template>
  <div class="sider">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "sider"
  }
</script>

<style scoped lang="scss">
  .sider{
    min-height: 100px;
    background: #C8EAFC;
  }
</style>