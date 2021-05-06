<template>
  <div class="demo">
    <div class="hWrapper">
      <w-icon class="h2Icon" name="bofangqi"></w-icon>
      <h2>简单用法</h2>
    </div>
    <p>预览</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-button>默认按钮</w-button>
        <w-button icon="setting">带Icon</w-button>
        <w-button :loading="true">加载动画</w-button>
        <w-button disabled>禁用按钮</w-button>
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
      <h2>按钮组</h2>
    </div>
    <p>允许在一个Group里放入多个Button</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-button-group>
          <w-button icon="left">上一页</w-button>
          <w-button>更多</w-button>
          <w-button icon="right" icon-position="right">下一页</w-button>
        </w-button-group>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <!--<div class="code-user-desc">-->
          <!--组件描述说明-->
          <!--</div>-->
          <pre v-highlightjs class="pre"><code class="vue">{{codeShow2}}</code></pre>
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
  import Icon from '../../../src/icon'
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'
  import VueHighlightJS from 'vue-highlightjs';
  import 'highlight.js/styles/atom-one-light.css';
  import mixin from '../mixin'
  Vue.use(VueHighlightJS);

  export default {
    name: 'demo',
    mixins: [mixin],
    components: {
      'w-button': Button,
      'w-icon': Icon,
      'w-button-group': ButtonGroup
    },
    data() {
      return {
        codeShow: `
          <w-button>默认按钮</w-button>
          <w-button icon="setting">默认按钮</w-button>
          <w-button :loading="true">默认按钮</w-button>
          <w-button disabled>默认按钮</w-button>
        `.replace(/^ {8}/gm, '').trim(),
        codeShow2:`
          <w-button-group>
            <w-button icon="left">上一页</w-button>
            <w-button>更多</w-button>
            <w-button icon="right" icon-position="right">下一页</whh-button>
          </w-button-group>
        `.replace(/^ {8}/gm, '').trim(),

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
