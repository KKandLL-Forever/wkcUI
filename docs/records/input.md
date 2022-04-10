---
title: Input要点
sidebar: auto
---
## Input Event实现原理
### vue中的$event

```vue
<input type="text" @change="handleClick('click',$event.target.value)">
```

## 双向绑定

### vue双向绑定原理
```vue
<input v-model="value"/>
<!--等于-->
<input :value="value" @input="$emit('input',$event.target.value)"/>
```


### 拓展
##### 如果不像使用默认的value和input事件,可以使用下面的写法  

##### 父组件中
```vue
<my-checkbox v-model="parentChecked"></my-checkbox>
```

##### 子组件my-checkbox中
```javascript
Vue.component('my-checkbox', {
  template: `
    <input
    type="checkbox"
    :checked="checked"
    @change="$emit('input',$event.target.checked)"/> 
    `,
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    checked: Boolean
  },
})
```




