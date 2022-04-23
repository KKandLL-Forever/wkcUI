---
title: Table要点
sidebar: auto
---

## 最基本的Table实现原理

循环columns和data即可
```vue
<!--只显示最基本代码-->
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

## border stripe原理
动态class和样式
