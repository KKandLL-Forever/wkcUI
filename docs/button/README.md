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

