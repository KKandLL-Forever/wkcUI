<template>
  <div id="app">
    <!--<w-tabs :selected="defaultSelectedTab" @update:selected="selectedTab = $event">-->
    <!--  <w-tabs :selected.sync="defaultSelectedTab">-->
    <!--    <w-tabs-head>-->
    <!--      <w-tabs-item name="tab1">-->
    <!--        tab1-->
    <!--      </w-tabs-item>-->
    <!--      <w-tabs-item name="tab2">-->
    <!--        tab2-->
    <!--      </w-tabs-item>-->
    <!--      <w-tabs-item name="tab3" disabled>-->
    <!--        tab3-->
    <!--      </w-tabs-item>-->
    <!--      <template slot="extraAction">-->
    <!--        <button>Extra Actions</button>-->
    <!--      </template>-->
    <!--    </w-tabs-head>-->
    <!--    <w-tabs-body>-->
    <!--      <w-tabs-content name="tab1">-->
    <!--        tab1 content-->
    <!--      </w-tabs-content>-->
    <!--      <w-tabs-content name="tab2">-->
    <!--        tab2 content-->
    <!--      </w-tabs-content>-->
    <!--      <w-tabs-content name="tab3">-->
    <!--        tab3 content-->
    <!--      </w-tabs-content>-->
    <!--    </w-tabs-body>-->
    <!--  </w-tabs>-->
  
  
  
  
  
    <!--  <button @click="showToast1">top</button>-->
    <!--  <button @click="showToast2">middle</button>-->
    <!--  <button @click="showToast3">bottom</button>-->
  
  
  
  
    <!--  <w-layout style="height: 100vh;">-->
    <!--    <w-header class="demo2">header</w-header>-->
    <!--    <w-layout>-->
    <!--      <w-content class="demo2">content</w-content>-->
    <!--      <w-sider class="demo2">sider</w-sider>-->
    <!--    </w-layout>-->
    <!--    <w-footer class="demo2">footer</w-footer>-->
    <!--  </w-layout>-->
    <!--  <hr/>-->
    <!--  <w-layout style="height: 100vh;">-->
    <!--    <w-sider class="demo2">sider</w-sider>-->
    <!--    <w-layout>-->
    <!--      <w-header class="demo2">header</w-header>-->
    <!--      <w-content class="demo2">content</w-content>-->
    <!--      <w-footer class="demo2">footer</w-footer>-->
    <!--    </w-layout>-->
    <!--  </w-layout>-->
  
  
  
  
    <!--  <w-row>-->
    <!--    <w-col span="23" offset="1" :narrow-pc="{span: 12,offset:12}">-->
    <!--      <div class="demo"></div>-->
    <!--    </w-col>-->
    <!--    <w-col span="24" :narrow-pc="{span: 8}">-->
    <!--      <div class="demo"></div>-->
    <!--    </w-col>-->
    <!--    <w-col span="24" :narrow-pc="{span: 8}">-->
    <!--      <div class="demo"></div>-->
    <!--    </w-col>-->
    <!--    <w-col span="24" :narrow-pc="{span: 8}">-->
    <!--      <div class="demo"></div>-->
    <!--    </w-col>-->
    <!--    <w-col span="24" :narrow-pc="{span: 8}">-->
    <!--      <div class="demo"></div>-->
    <!--    </w-col>-->
    <!--    <w-col span="24" :narrow-pc="{span: 8}">-->
    <!--      <div class="demo"></div>-->
    <!--    </w-col>-->
    <!--  </w-row>-->
  
  
  
  
<!--    <div class="button-box">-->
<!--      <w-button icon="setting"></w-button>-->
<!--&lt;!&ndash;      默认按钮&ndash;&gt;-->
<!--      <div>-->
<!--        <w-button icon="setting">默认按钮</w-button>-->
<!--        <w-button type="primary" icon="setting">主要按钮</w-button>-->
<!--        <w-button type="success" icon="setting">成功按钮</w-button>-->
<!--        <w-button type="info">信息按钮</w-button>-->
<!--        <w-button type="warning">警告按钮</w-button>-->
<!--        <w-button type="danger">危险按钮</w-button>-->
<!--      </div>-->
<!--      <br>-->
<!--&lt;!&ndash;      朴素按钮&ndash;&gt;-->
<!--      <div>-->
<!--        <w-button plain icon="setting">默认按钮</w-button>-->
<!--        <w-button plain type="primary" icon="setting">主要按钮</w-button>-->
<!--        <w-button plain type="success">成功按钮</w-button>-->
<!--        <w-button plain type="info">信息按钮</w-button>-->
<!--        <w-button plain type="warning">警告按钮</w-button>-->
<!--        <w-button plain type="danger">危险按钮</w-button>-->
<!--      </div>-->
<!--      <br>-->
<!--&lt;!&ndash;      圆形按钮&ndash;&gt;-->
<!--      <div>-->
<!--        <w-button circle icon="setting"></w-button>-->
<!--        <w-button circle type="primary" icon="setting"></w-button>-->
<!--        <w-button circle type="success" icon="setting"></w-button>-->
<!--        <w-button circle type="info" icon="setting"></w-button>-->
<!--        <w-button circle type="warning" icon="setting"></w-button>-->
<!--        <w-button circle type="danger" icon="setting"></w-button>-->
<!--      </div>-->
<!--      <br>-->
<!--&lt;!&ndash;      disabled状态&ndash;&gt;-->
<!--      <div>-->
<!--        <w-button disabled icon="setting" >默认按钮</w-button>-->
<!--        <w-button disabled type="primary" icon="setting">主要按钮</w-button>-->
<!--        <w-button disabled type="success" icon="setting">成功按钮</w-button>-->
<!--        <w-button disabled type="info">信息按钮</w-button>-->
<!--        <w-button disabled type="warning">警告按钮</w-button>-->
<!--        <w-button disabled type="danger">危险按钮</w-button>-->
<!--      </div>-->
<!--      <br>-->
<!--      <div>-->
<!--        <w-button disabled plain icon="setting">默认按钮</w-button>-->
<!--        <w-button disabled plain type="primary" icon="setting">主要按钮</w-button>-->
<!--        <w-button disabled plain type="success">成功按钮</w-button>-->
<!--        <w-button disabled plain type="info">信息按钮</w-button>-->
<!--        <w-button disabled plain type="warning">警告按钮</w-button>-->
<!--        <w-button disabled plain type="danger">危险按钮</w-button>-->
<!--      </div>-->
<!--      <br>-->
<!--&lt;!&ndash;      文字样式&ndash;&gt;-->
<!--      <div>-->
<!--        <w-button type="text">文字按钮</w-button>-->
<!--        <w-button disabled type="text">文字按钮</w-button>-->
<!--      </div>-->
<!--      <br>-->
<!--&lt;!&ndash;      图标按钮&ndash;&gt;-->
<!--      <div>-->
<!--        <w-button icon="setting"></w-button>-->
<!--        <w-button icon="like"></w-button>-->
<!--        <w-button icon="info-circle"></w-button>-->
<!--        <w-button icon="bofangqi">播放器</w-button>-->
<!--        <w-button>点赞<w-icon name="like"></w-icon></w-button>-->
<!--      </div>-->
<!--      <br>-->
<!--&lt;!&ndash;      Loading状态&ndash;&gt;-->
<!--      <div>-->
<!--        <w-button icon="setting" :loading="loading2" @click="loading2 = !loading2">-->
<!--          按钮-->
<!--        </w-button>-->
<!--        <w-button icon="setting" :loading="loading3" @click="loading3 = !loading3" icon-position="right">-->
<!--          按钮-->
<!--        </w-button>-->
<!--      </div>-->
<!--      <br>-->
<!--&lt;!&ndash;      按钮组&ndash;&gt;-->
<!--      <div>-->
<!--        <w-button-group>-->
<!--          <w-button type="primary" icon="left">上一页</w-button>-->
<!--          <w-button type="primary">更多</w-button>-->
<!--          <w-button type="primary">下一页 <w-icon name="right"></w-icon></w-button>-->
<!--        </w-button-group>-->
<!--      </div>-->
<!--    </div>-->


<!--    <div class="box">-->
<!--      <w-input value="李四" disabled></w-input>-->
<!--      <w-input value="张三" readonly></w-input>-->
<!--      <w-input value="王五" v-model="message"></w-input>-->
<!--      <p>{{message}}</p>-->
<!--      <button @click="message+=1">+1</button>-->
<!--    </div>-->
<!--    <div class="box">-->
<!--      <w-input value="王" @change="inputChange"></w-input>-->
<!--    </div>-->
<!--    <div class="box">-->
<!--      <w-input value="王" error="姓名不能少于两个字"></w-input>-->
<!--    </div>-->
  
      <w-menu :current.sync="activeIndex" :multiple="false">
        <w-menu-item menuName="handle">处理中心</w-menu-item>
        <w-submenu menuName="center">
          <template v-slot:title>控制中心</template>
          <w-menu-item menuName="control1">控制1</w-menu-item>
          <w-menu-item menuName="control2">控制2</w-menu-item>
          <w-menu-item menuName="control3">控制3</w-menu-item>
          <w-submenu menuName="control4">
            <template v-slot:title>控制4</template>
            <w-menu-item menuName="control1-1">控制1-1</w-menu-item>
            <w-menu-item menuName="control2-2">控制2-2</w-menu-item>
            <w-menu-item menuName="control3-3">控制3-3</w-menu-item>
          </w-submenu>
        </w-submenu>
        <w-menu-item menuName="message">消息中心</w-menu-item>
        <w-menu-item menuName="order">订单管理</w-menu-item>
      </w-menu>

<!--    <div class="test">-->
<!--      123-->
<!--      <div class="is-test">567</div>-->
<!--      <div>-->
<!--        345-->
<!--      </div>-->
<!--    </div>-->

  </div>
</template>

<script>
export default {
  name: "app",
  data(){
    return {
      loading1: false,
      loading2: true,
      loading3: false,
      message: '',
      defaultSelectedTab: 'tab2',
      // menu
      activeIndex: ['center']
    }
  },
  methods:{
    inputChange(e){
      console.log(e.target.value);
    },
    showToast(position){
      this.$toast('不要把广告关了',{
        closeButton: {
          text: '知道了',
          callBack(){
            console.log('ok');
          }
        },
        enableHtml: false,
        autoClose: true,
        autoCloseDelay: 50,
        position
      })
    },
    showToast1(){this.showToast('top')},
    showToast2(){this.showToast('middle')},
    showToast3(){this.showToast('bottom')}
  }
}
</script>

<style scoped lang="scss">
#app{
  display: flex;
  justify-content: center;
  align-items: center;
}
//.test{
//  height: 300px;
//}
////.is-test{
////  border: 1px solid blue;
////}
//.test .is-test{
//  height: 200px;
//  width: 200px;
//  border: 1px solid green;
//}
.button-box{}
</style>
