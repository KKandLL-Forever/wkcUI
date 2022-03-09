<template>
  <!--  <button class="w-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">-->
  <button class="w-button" :class="[`icon-${iconPosition}`,`${type}`]" @click="$emit('click')">
    <w-icon class="icon" v-if="icon && !loading" :name="icon"></w-icon>
    <w-icon class="loading icon" v-if="loading" name="loading"></w-icon>
    <div class="w-button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from './icon'

export default {
  name: 'wkcButton',
  components: {
    'w-icon': Icon
  },
  // props:['icon','iconPosition']
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validate(value){
        return value === 'left' || value === 'right'
      }
    },
    type: {
      type: String,
      default: 'default',
      validate(value){
        return value === 'default' || value === 'primary' || value === 'danger' || value === 'success' || value === 'info' || value === 'warning'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/button.scss';
</style>
