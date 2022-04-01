---
title: Input要点
---

### 双向绑定

### Input Event实现原理
vue中的$event

```vue
<input type="text" @change="handleClick('click',$event.target.value)">
```

