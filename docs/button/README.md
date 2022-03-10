---
title: button要点
---
### 组件内怎么接收多个class

class接收一个数组
```vue
<button :class="['classA','classB']"></button> 
```
### this.$emit的应用
```vue
<!--组件外-->
<w-button @click="handle()"></w-button>
<!--组件内-->
<button @click="$emit('click')"></button>
```


### button-group3个按钮border重合
用 `margin-left/right:-1px;`  来抵消,不设置border会影响hover等其他状态

### button-group子元素需要检测

```vue
<script>
export default {
  name: 'wkcButtonGroup',
  mounted () {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`w-button-group 的子元素应该全是 w-button，但是你写的是 ${name}`)
      }
    }
  }
}
</script>
```

### button相关scss知识

@use    `@use "sass:math";`
@chartset
BEM规则
mix混合
变量 `$variables`
脚本模式 `#{xxx}`
默认变量 `!default`
```scss
//1.default没被定义
$abc: red !default;
div {
    background: $abc;
}
//在default之前已经定义过
$abc: black;
$abc: red !default;
div {
    background: $abc;
}
```
编译
```css
/*1.*/
div {
    background: red;
}
/*2.*/
div {
  background: black;
}
```
