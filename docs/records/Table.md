---
title: Table要点
sidebar: auto
---

## 最基本的Table实现原理

循环columns和data即可
```vue
<!--只显示关键代码-->
<template>
  <div class="w-table-wrapper">
    <table>
      <thead>
      <tr>
        <th v-for="item in columns">
          {{item.label}}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in data">
        <template v-for="column in columns">
          <td>{{item[column.prop]}}</td>
        </template>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    columns: {
      type: Array,
      default: []
    },
    data: {
      type: Array,
      default: []
    },
  }
}
</script>
```

## 单选row数据实现原理

checkbox上监听click事件,回调函数中使用$emit通知select事件并传值
```vue
<!--只显示关键代码-->
<script>
export default {
  methods: {
    handleItemCheck(e,item,index){
      this.$emit('select',{checked: e.target.checked,item,index})
    }
  }
}
</script>

```

## border stripe原理
动态class和样式


