<template>
  <w-button :loading="loading1" @click="loading1 = !loading1" type="primary">
    按钮
  </w-button>
</template>

<script>
export default {
  name: "demo",
  data(){
    return {
      loading1: false,
      loading2: true,
      loading3: false,
  
      message: '',
      defaultSelectedTab: 'tab2',
    }
  },
}
</script>

<style scoped lang="scss">

</style>
