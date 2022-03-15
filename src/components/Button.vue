<template>
  <!--  <button class="w-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">-->
  <button
    class="w-button"
    :class="[
      `icon-${iconPosition}`,
      type ? `w-button--${type}` : '',
      plain ? `is-plain` : '',
      circle ? `is-circle` : '',
      disabled ? `is-disabled` : '',
      ]"
    @click="$emit('click')">
    <w-icon class="icon" v-if="icon && !loading" :name="icon"></w-icon>
    <w-icon class="loading icon" v-if="loading" name="loading"></w-icon>
    <span class="w-button-content">
      <slot></slot>
    </span>
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
    loading: Boolean,
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
    },
    plain:Boolean,
    circle: Boolean,
    disabled: Boolean,
  }
}
</script>

<style lang="scss" scoped>
@import '../style/button.scss';
</style>
