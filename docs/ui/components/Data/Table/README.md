---
title: Table表格
---
# Input输入框


<ClientOnly>
<input-vp></input-vp>
</ClientOnly>

### API

| 属性             | 说明                                           | 类型    | 默认值  |
| :--------------- | :--------------------------------------------- | :------ | :------ |
| `type`           | 声明 input 类型，同原生 input 标签的 type 属性 | String  | `text`  |
| `disabled`       | 是否禁用状态                                   | Boolean | `false` |
| `readonly`       | 是否只读状态                                   | Boolean | `false` |
| `value(v-model)` | 输入框内容                                     | String  | -       |

#### Input Event

| 属性       | 说明                              | 返回值                    |
|:---------|:--------------------------------|:-----------------------|
| `focus`  | 在 Input 获得焦点时触发                 | (event: Event)         |
| `input`  | 在 Input 值改变时触发                  | (value: string/number) |
| `change` | 仅在输入框失去焦点或用户按下回车时触发             | (value: string/number) |
| `blur`   | 在 Input 失去焦点时触发                 | (event: Event)         |
