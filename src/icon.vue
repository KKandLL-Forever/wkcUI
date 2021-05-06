<template>
  <svg class="w-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
  import './svg'
  export default {
    name: 'wkcIcon',
    props: ['name']
  }
</script>

<style lang="scss" scoped>
  svg {width: 1em; height: 1em; }
</style>
