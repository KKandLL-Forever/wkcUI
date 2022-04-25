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

## 全选与反选

内部维护一个被选择数据的数组selected,默认为空数组.  
全选时,就将`this.data`赋值给`this.selected`
而此时每条数据的checkbox的`check`状态则由`this.selected`控制

:::tips
这时单选的逻辑也相应发生变化

```vue
<template>
  <!--省略-->
  <input type="checkbox" :checked="inSelectedItems(item)" @click="handleItemCheck($event,item,index)"/>
  <!--省略-->
</template>
<script>
export default {
  name: "Table",
  props: {
    data: {
      type: Array,
      default: () => [],
      validator (array) {
        return !(array.filter(item => item.key === undefined).length > 0)
      }
    },
    selected: {
      type: Array,
      default: () => []
    },
  },
  methods: {
    inSelectedItems (item) {
      return this.selected.filter(i => i.key === item.key).length > 0
    },
    handleItemCheck (e,item, index) {
      let selected = e.target.checked
      let copy = JSON.parse(JSON.stringify(this.selected))
      if (selected) {
        copy.push(item)
      } else {
        copy = copy.filter(i => i.id !== item.id)
      }
      this.$emit('update:selected', copy)
    },
    handleAllCheck (e) {
      let selected = e.target.checked
      this.$emit('update:selected', selected ? this.data : [])
    }
  }
}
</script>
```

## border stripe loading原理
动态class和样式


