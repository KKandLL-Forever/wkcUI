<template>
  <div>
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
  
  
  
  
    <div class="box">
      <w-button :loading="loading1" @click="loading1 = !loading1" type="primary">
        按钮
      </w-button>
      <w-button icon="setting" :loading="loading2" @click="loading2 = !loading2">
        按钮
      </w-button>
      <w-button icon="setting" :loading="loading3" @click="loading3 = !loading3" icon-position="right">
        按钮
      </w-button>
      <w-button-group>
        <w-button icon="left">上一页</w-button>
        <w-button>更多</w-button>
        <w-button icon="right" icon-position="right">下一页</w-button>
      </w-button-group>
    </div>
    <div class="box">
      <w-input value="李四" disabled></w-input>
      <w-input value="张三" readonly></w-input>
      <w-input value="王五" v-model="message"></w-input>
      <p>{{message}}</p>
      <button @click="message+=1">+1</button>
    </div>
    <div class="box">
      <w-input value="王" @change="inputChange"></w-input>
    </div>
    <div class="box">
      <w-input value="王" error="姓名不能少于两个字"></w-input>
    </div>

  </div>
</template>

<script>
export default {
  name: "demo",
  data(){
    return {
      loading1: false,
      loading2: true,
      loading3: false,
  
      message: '',
      defaultSelectedTab: 'tab2',
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

</style>
