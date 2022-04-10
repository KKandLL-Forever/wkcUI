<template>
  <div class="wrapper" :class="{error}">
    <input :value="value"
           :type="showPassword ? 'password' : 'text'"
           :disabled="disabled"
           :readonly="readonly"
           :placeholder="placeholder"
           @change="$emit('change',$event.target.value)"
           @input="$emit('input',$event.target.value)"
           @focus="$emit('focus',$event)"
           @blur="$emit('blur',$event)"
    >
    
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'
export default {
  components: {Icon},
  name: "wkcInput",
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    },
    placeholder: {
      type: String
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/common/var';
$height: 32px;
$border-color: #dcdfe6;
$border-color-hover: #666666;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgba(0,0,0,0.5);
$red: #F1453D;
.wrapper{
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: .5em
  }
  > input{
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    color: #606266;
    padding: 0 8px;
    font-size: inherit;
    &::placeholder {
      color: $border-color
    }
    &:hover{
      border-color: #c0c4cc;
    }
    &:focus{
      outline: none;
      border-color: $--color-primary;
    }
    &[disabled],&[readonly]{
      border: 1px solid $border-color;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error{
    > input{
      border-color: $red;
    } }
  .icon-error {
    fill: $red;
  }
  .errorMessage {
    color: $red;
  }
}
</style>
