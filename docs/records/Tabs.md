---
title: Tabs要点
sidebar: auto
---

## Extra Action实现原理

具名插槽
```vue
<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <slot name="extraAction"></slot>
  </div>
</template>

```

## item切换实现原理

1. 在爷爷组件(tabs)上设立事件总线eventHub/eventBus,使用provide/inject分发给所有儿子组件和孙子组件.  
2. 当某个tab被点击时,在tabs-item上emit一个事件`update:selected`, tabs-item和tabs-content上监听这个事件

```vue
<!--$emit,只展示核心代码-->
<template>
  <div class="tabs-item" @click="clickEmitName">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabs-item",//"tabs-content"
  inject: ['eventBus'],
  props:{
    name:{
      type: String | Number,
      require: true
    },
  },
  methods:{
    clickEmitName(){
      this.eventBus.$emit('update:selected',this.name,this)
    }
  }
}
</script>
```

```vue
<!--$on,只展示核心代码-->
<script>
  export default {
    name: "tabs-item",
    inject: ['eventBus'],
    props:{
      name:{
        type: String | Number,
        require: true
      },
    },
    created() {
      this.eventBus.$on('update:selected',(name)=>{
        console.log(name,'被选中的item name')
      })
    },
  }
</script>
```


