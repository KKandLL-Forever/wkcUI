<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "header.vue"
  }
</script>

<style scoped lang="scss">
  .header{
    min-height: 100px;
    background: #47BFFC;
  }
</style>