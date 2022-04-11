---
title: Layout要点
sidebar: auto
---

## 栅格核心实现原理  

row:`display:flex` `flex-wrap:wrap`  
col:本质上通过width百分比来控制宽度
```scss
.col .col-1{
  width: 8.33333333%;
}
.col .col-2{
    width: 16.66666667%;
}
//省略
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
