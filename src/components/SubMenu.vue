<template>
  <div
    class="w-submenu"
  >
    <div class="w-submenu__title" @click="handleClick">
      <slot name="title"></slot>
    </div>
    <div class="w-submenu__dropdown" v-show="showDropdown">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubMenu",
  props: {
    index: {
      type: String
    }
  },
  computed:{
  },
  data() {
   return {
     showDropdown: false
   }
  },
  mounted(){
  },
  methods:{
    handleClick(){
      this.showDropdown = !this.showDropdown
    },
  }
}
</script>

<style scoped lang="scss">
@import '../style/mixins/mixins';

@mixin menu-item {
  height: 56px;
  line-height:56px;
  padding: 0 20px;
  cursor: pointer;
  
}
@include b(menu-item){
  @include menu-item;
  @include when(selected){
    color: $--menu-item-selected-font-color;
  }
}
.w-submenu{
  position: relative;
  &__dropdown{
    position: absolute;
    top: 100%;
    left: 0;
    white-space: nowrap;
    min-width: 200px;
    border: none;
    border-radius: $--border-radius-small;
    box-shadow: $--box-shadow-light;
  }
}
.w-submenu__title{
  padding: 0 20px;
  cursor: pointer;
  //position: relative;
  height: 56px;
  line-height:56px;
}

.w-submenu .w-submenu .w-submenu__dropdown{
  top: 0;
  left: 100%;
}

</style>
