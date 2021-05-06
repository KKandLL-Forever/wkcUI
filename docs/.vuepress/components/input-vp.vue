<template>
  <div class="demo">
    <div class="hWrapper">
      <w-icon class="h2Icon" name="bofangqi"></w-icon>
      <h2>简单用法</h2>
    </div>
    <p>预览</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-input></w-input>
        <w-input value="中文"></w-input>
        <w-input value="中文" disabled></w-input>
        <w-input value="中文" readonly></w-input>
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
      <h2>双向绑定</h2>
    </div>
    <p>预览</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-input v-model="value"></w-input>
        <div style="margin-top: 20px">
          value: {{value}}
        </div>
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
  import Input from '../../../src/input'
  import Icon from '../../../src/icon'
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
        value: '1',
        codeShow: `
          <w-input></w-input>
          <w-input value="中文"></w-input>
          <w-input value="中文" disabled></w-input>
          <w-input value="中文" readonly></w-input>
        `.replace(/^ {8}/gm, '').trim(),
        codeShow2:`
          <w-input v-model="value"></w-input>
          <div style="margin-top: 20px">
            value: {{value}}
          </div>
        `.replace(/^ {8}/gm, '').trim(),

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
