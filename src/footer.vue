<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "footer.vue"
  }
</script>

<style scoped lang="scss">
  .footer{
    min-height: 100px;
    background: #47BFFC;
  }
</style>