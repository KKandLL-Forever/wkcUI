<template>
  <div
    class="w-submenu"
    :class="[active?'is-selected':'']"
    v-wipe="close"
  >
    <div class="w-submenu__title" @click="handleClick">
      <slot name="title"></slot>
      <span class="w-submenu__verticalArrow">
        <w-icon name="arrow-up" v-if="showDropdown"></w-icon>
        <w-icon name="arrow-down" v-else></w-icon>
      </span>
      <span class="w-submenu__horizontalArrow">
        <w-icon name="arrow-left" v-if="showDropdown"></w-icon>
        <w-icon name="arrow-right" v-else></w-icon>
      </span>
    </div>
    <div class="w-submenu__dropdown" v-show="showDropdown">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
import wipe from '../../wipeoutOtherState'
import Icon from '../icon'
export default {
  name: "SubMenu",
  components:{
    Icon
  },
  inject: ['rootMenu'],
  directives: {wipe},
  props: {
    menuName: {
      type: String,
      require: true
    }
  },
  computed:{
    active(){
      return this.rootMenu.actionPath.indexOf(this.menuName) >= 0
    }
  },
  data() {
   return {
     showDropdown: false,
   }
  },
  mounted(){
    console.log(wipe,'wipe')
  },
  methods:{
    handleClick(){
      this.showDropdown = !this.showDropdown
    },
    handleActionPathChange(){
      this.rootMenu.actionPath.unshift(this.menuName)
      if(this.$parent.handleActionPathChange){
        this.$parent.handleActionPathChange()
      }
    },
    close(){
      this.showDropdown = false
    },
  }
}
</script>

<style scoped lang="scss">
@import '../../style/mixins/mixins';

@mixin menu-item {
  height: 36px;
  line-height:36px;
  padding: 0 10px;
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
  @include when(selected){
    &::after{
      content: '';
      position: absolute;
      width:100%;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid $--color-primary;
    }
  }
  &__dropdown{
    padding: 5px 0;
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
  .w-submenu__horizontalArrow{
    display: none;
  }
  .w-submenu__verticalArrow{
    display: inline-flex;
    margin-left: 8px;
  }
}

.w-submenu .w-submenu {
  
  .w-submenu__title{
    padding: 0 10px;
    height: 36px;
    line-height:36px;
    display: flex;
    justify-content:space-between;
  }
  .w-submenu__dropdown{
    top: 0;
    left: 100%;
    margin-left:10px;
  }
  .w-submenu__horizontalArrow{
    display: inline-block;
  }
  .w-submenu__verticalArrow{
    display:none;
  }
}

</style>
