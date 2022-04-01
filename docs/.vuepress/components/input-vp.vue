<template>
  <div class="demo">
    <div class="hWrapper">
      <w-icon class="h2Icon" name="link"></w-icon>
      <h2>基础用法</h2>
    </div>
    <p>预览</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-input v-model="value" placeholder="请输入内容"></w-input>
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
        <w-icon class="icon-down" :name="isShow[0] === false ? 'arrow-down' : 'arrow-up'"></w-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    
    <div class="hWrapper">
      <w-icon class="h2Icon" name="link"></w-icon>
      <h2>禁用状态</h2>
    </div>
    <p>预览</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-input placeholder="请输入内容" disabled></w-input>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <pre v-highlightjs class="pre"><code class="vue">{{codeShow2}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[0] === false ? 'arrow-down' : 'arrow-up'"></w-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  
    <div class="hWrapper">
      <w-icon class="h2Icon" name="link"></w-icon>
      <h2>只读状态</h2>
    </div>
    <p>预览</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-input placeholder="请输入内容" readonly></w-input>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <!--<div class="code-user-desc">-->
          <!--组件描述说明-->
          <!--</div>-->
          <pre v-highlightjs class="pre"><code class="vue">{{codeShow3}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[0] === false ? 'arrow-down' : 'arrow-up'"></w-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue'
import Input from '../../../src/components/input'
import Icon from '../../../src/components/icon'
import VueHighlightJS from 'vue-highlightjs';
import 'highlight.js/styles/atom-one-light.css';
import mixin from '../mixin'
Vue.use(VueHighlightJS);

export default {
  name: 'demo',
  mixins: [mixin],
  components: {
    'w-input': Input,
    'w-icon': Icon,
  },
  data() {
    return {
      value: '',
      codeShow: `
          <w-input v-model="value" placeholder="请输入内容"></w-input>
        `.replace(/^ {8}/gm, '').trim(),
      codeShow2:`
          <w-input placeholder="请输入内容" disabled></w-input>
        `.replace(/^ {8}/gm, '').trim(),
      codeShow3:`
          <w-input placeholder="请输入内容" readonly></w-input>
        `.replace(/^ {8}/gm, '').trim(),
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
