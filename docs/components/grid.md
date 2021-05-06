---
title: Grid网格组件
---
# Grid网格组件


<ClientOnly>
<grid-vp></grid-vp>
</ClientOnly>

### Row API

属性 |	说明	| 类型 |	默认值
:--- | :--- | :--- | :---
`gutter` | 栅格间隔 | Number | 0

### Col API

属性 |	说明	| 类型 |	默认值
:--- | :--- | :--- | :---
`span` | 栅格占位格数，为 0 时相当于 `display: none` | Number | -
`offset` | 栅格左侧的间隔格数，间隔内不可以有栅格 | Number | 0
