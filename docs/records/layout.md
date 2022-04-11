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


