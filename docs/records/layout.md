---
title: Layout要点
sidebar: auto
---

## 栅格核心实现原理  

row:`display:flex` `flex-wrap:wrap`  
col:本质上通过width百分比来控制宽度.
```scss
.col .col-1{
  width: 8.33333333%;
}
.col .col-2{
    width: 16.66666667%;
}
//省略
```

同时接受span这个prop,来控制class类名
```vue
<div class="col" :class="[`col-${span}`]">
  <slot></slot>
</div>
```

手写24个col-xx有点蠢,这里可以利用scss来for循环24次,自动生成24个col-xx
```scss
.col{
    $class-prefix: col-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
            width: ($n/24)*100%
        }
    }
}
```


## offset实现原理

实现原理和span类似,只是控制的是margin-left

```scss
.col .offset-1{
  margin-left: 8.33333333%;
}
.col .offset-2{
  margin-left: 16.66666667%;
}
//省略
```

一样用scss的for循环生成24个offset-xx

```scss
.col{
    $class-prefix: col-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
            width: ($n/24)*100%
        }
    }
}
```

同时接受offset这个prop,来控制class类名
```vue
<div class="col" :class="[`col-${span}`,`offset-${offset}`]">
  <slot></slot>
</div>
```

## gutter实现原理

```scss
//col

.col {
    padding-left: 10px;
    padding-right: 10px;
}
```

```scss
//row

.row {
    margin-left: -10px;
    margin-right: -10px;
}
```

::: warning 警告
但要特别注意,这里一定要使用border-box
:::  

那怎么传递给col呢?
使用provide和inject传递给row下面的所有组件

```javascript
//row组件
export default {
  provide () {
    return {
      gutter: this.gutter
    }
  },
  props:{
    gutter:{
      type:[Number,String]
    },
  },
  computed:{
    rowStyle(){
      let {gutter} = this
      return {
        marginRight: -gutter/2+'px',
        marginLeft: -gutter/2+'px'
      }
    },
  }
}
```

```javascript
//col组件
export default {
    inject: ['gutter'],
    computed:{
     colStyle(){
       return{
         paddingLeft: this.gutter/2 + 'px',
         paddingRight: this.gutter/2 + 'px'
       }
     }
    }
  }
```
