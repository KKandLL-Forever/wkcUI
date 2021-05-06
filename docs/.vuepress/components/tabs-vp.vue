<template>
  <div class="demo">
    <div class="hWrapper">
      <w-icon class="h2Icon" name="bofangqi"></w-icon>
      <h2>简单用法</h2>
    </div>
    <p>预览</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-tabs :selected.sync="defaultSelectedTab">
          <w-tabs-head>
            <w-tabs-item name="tab1">
              tab1
            </w-tabs-item>
            <w-tabs-item name="tab2">
              tab2
            </w-tabs-item>
            <template slot="extraAction">
              <w-button>Extra Actions</w-button>
            </template>
          </w-tabs-head>
          <w-tabs-body>
            <w-tabs-content name="tab1">
              tab1 content
            </w-tabs-content>
            <w-tabs-content name="tab2">
              tab2 content
            </w-tabs-content>
          </w-tabs-body>
        </w-tabs>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <!--<div class="code-user-desc">-->
          <!--组件描述说明-->
          <!--</div>-->
          <pre v-highlightjs class="pre"><code class="vue">{{codeShow}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[0] === false ? 'down' : 'up'"></w-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <div class="hWrapper">
      <w-icon class="h2Icon" name="bofangqi"></w-icon>
      <h2>禁用某一项</h2>
    </div>
    <p>预览</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-tabs :selected.sync="defaultSelectedTab">
          <w-tabs-head>
            <w-tabs-item name="tab1">
              tab1
            </w-tabs-item>
            <w-tabs-item name="tab2">
              tab2
            </w-tabs-item>
            <w-tabs-item name="tab3" disabled>
              tab3
            </w-tabs-item>
            <template slot="extraAction">
              <w-button>Extra Actions</w-button>
            </template>
          </w-tabs-head>
          <w-tabs-body>
            <w-tabs-content name="tab1">
              tab1 content
            </w-tabs-content>
            <w-tabs-content name="tab2">
              tab2 content
            </w-tabs-content>
            <w-tabs-content name="tab3">
              tab3 content
            </w-tabs-content>
          </w-tabs-body>
        </w-tabs>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <!--<div class="code-user-desc">-->
          <!--组件描述说明-->
          <!--</div>-->
          <pre v-highlightjs class="pre"><code class="vue">{{codeShow}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[1] === false ? 'down' : 'up'"></w-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Tabs from '../../../src/tabs'
  import TabsBody from '../../../src/tabs-body'
  import TabsContent from '../../../src/tabs-content'
  import TabsHead from '../../../src/tabs-head'
  import TabsItem from '../../../src/tabs-item'
  import Button from '../../../src/button'
  import Icon from '../../../src/icon'
  import VueHighlightJS from 'vue-highlightjs';
  import 'highlight.js/styles/atom-one-light.css';
  import mixin from '../mixin'
  Vue.use(VueHighlightJS);

  export default {
    name: 'demo',
    mixins: [mixin],
    components: {
      'w-tabs': Tabs,
      'w-tabs-body': TabsBody,
      'w-tabs-content': TabsContent,
      'w-tabs-head': TabsHead,
      'w-tabs-item': TabsItem,
      'w-button': Button,
      'w-icon': Icon,
    },
    data() {
      return {
        defaultSelectedTab: 'tab2',
        codeShow: `
          <w-tabs :selected.sync="defaultSelectedTab">
          <w-tabs-head>
            <w-tabs-item name="tab1">
              tab1
            </w-tabs-item>
            <w-tabs-item name="tab2">
              tab2
            </w-tabs-item>
            <template slot="extraAction">
              <w-button>Extra Actions</w-button>
            </template>
          </w-tabs-head>
          <w-tabs-body>
            <w-tabs-content name="tab1">
              tab1 content
            </w-tabs-content>
            <w-tabs-content name="tab2">
              tab2 content
            </w-tabs-content>
          </w-tabs-body>
        </w-tabs>
        `.replace(/^ {8}/gm, '').trim(),
        codeShow2:`
          <w-tabs :selected.sync="defaultSelectedTab">
          <w-tabs-head>
            <w-tabs-item name="tab1">
              tab1
            </w-tabs-item>
            <w-tabs-item name="tab2">
              tab2
            </w-tabs-item>
            <w-tabs-item name="tab3" disabled>
              tab3
            </w-tabs-item>
            <template slot="extraAction">
              <w-button>Extra Actions</w-button>
            </template>
          </w-tabs-head>
          <w-tabs-body>
            <w-tabs-content name="tab1">
              tab1 content
            </w-tabs-content>
            <w-tabs-content name="tab2">
              tab2 content
            </w-tabs-content>
            <w-tabs-content name="tab3">
              tab3 content
            </w-tabs-content>
          </w-tabs-body>
        </w-tabs>
        `.replace(/^ {8}/gm, '').trim(),
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
