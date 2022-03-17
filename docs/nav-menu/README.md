---
title: NavMenu要点
---

## 点击切换的实现思路
每个MenuItem有一个isSelected:false  
通过控制isSelected来控制选中状态  
样式切换用class类名控制  

那么,怎么通过切换子组件(也就是MenuItem)的isSelected呢  
方法一: 遍历父组件的$children,对isSelected进行控制  
问题: 多级菜单很麻烦,而且还有subMenu

```vue
<script>
export default {
  computed:{
    menuItems(){
      //确定所有的子节点
      return this.$children.filter(child => child.$options.name === 'MenuItem')
    }
  }
}
</script>
```

方法二: provide/inject 将父组件实例传递给所有子组件,子组件再调用父组件的方法

```vue
<script>
//父组件
export default {
  data(){
    return {
      child: [],
    }
  },
  provide(){
    return {
      rootMenu: this
    }
  },
  methods:{
    collectChild(child){
      this.child.push(child)
    }
  }
}
</script>
```

```vue
<script>
//子组件
export default {
  inject:['rootMenu'],
  created(){
    this.rootMenu.collectChild(this)
  }
}
</script>
```

