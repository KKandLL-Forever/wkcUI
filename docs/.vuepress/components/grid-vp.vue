<template>
  <div class="demo">
    <div class="hWrapper">
      <w-icon class="h2Icon" name="bofangqi"></w-icon>
      <h2>简单用法</h2>
    </div>
    <p>预览</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-row class="demoRow">
          <w-col span="8">
            <div class="demoCol">8</div>
          </w-col>
          <w-col span="8">
            <div class="demoCol">8</div>
          </w-col>
          <w-col span="8">
            <div class="demoCol">8</div>
          </w-col>
        </w-row>

        <w-row class="demoRow">
          <w-col span="6">
            <div class="demoCol">6</div>
          </w-col>
          <w-col span="6">
            <div class="demoCol">6</div>
          </w-col>
          <w-col span="6">
            <div class="demoCol">6</div>
          </w-col>
          <w-col span="6">
            <div class="demoCol">6</div>
          </w-col>
        </w-row>

        <w-row class="demoRow">
          <w-col span="4">
            <div class="demoCol">4</div>
          </w-col>
          <w-col span="4">
            <div class="demoCol">4</div>
          </w-col>
          <w-col span="4">
            <div class="demoCol">4</div>
          </w-col>
          <w-col span="4">
            <div class="demoCol">4</div>
          </w-col>
          <w-col span="4">
            <div class="demoCol">4</div>
          </w-col>
          <w-col span="4">
            <div class="demoCol">4</div>
          </w-col>
        </w-row>

        <w-row class="demoRow">
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
        </w-row>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <!--<div class="code-user-desc">-->
          <!--组件描述说明-->
          <!--</div>-->
          <pre v-highlightjs><code class="vue">{{codeShow}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[0] === false ? 'down' : 'up'"></w-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <div class="hWrapper">
      <w-icon class="h2Icon" name="bofangqi"></w-icon>
      <h2>区块间隔</h2>
    </div>
    <p>预览</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-row class="demoRow" gutter="10">
          <w-col span="8">
            <div class="demoCol">8</div>
          </w-col>
          <w-col span="8">
            <div class="demoCol">8</div>
          </w-col>
          <w-col span="8">
            <div class="demoCol">8</div>
          </w-col>
        </w-row>
        <w-row class="demoRow" gutter="10">
          <w-col span="6">
            <div class="demoCol">6</div>
          </w-col>
          <w-col span="6">
            <div class="demoCol">6</div>
          </w-col>
          <w-col span="6">
            <div class="demoCol">6</div>
          </w-col>
          <w-col span="6">
            <div class="demoCol">6</div>
          </w-col>
        </w-row>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <!--<div class="code-user-desc">-->
          <!--组件描述说明-->
          <!--</div>-->
          <pre v-highlightjs><code class="vue">{{codeShow2}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[1] === false ? 'down' : 'up'"></w-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
    <div class="hWrapper">
      <w-icon class="h2Icon" name="bofangqi"></w-icon>
      <h2>左右偏移</h2>
    </div>
    <p>预览</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <w-row class="demoRow" gutter="10">
          <w-col span="8">
            <div class="demoCol">8</div>
          </w-col>
          <w-col span="8" offset="8">
            <div class="demoCol">8</div>
          </w-col>
        </w-row>
        <w-row class="demoRow" gutter="10">
          <w-col span="6" offset="6">
            <div class="demoCol">6</div>
          </w-col>
          <w-col span="6" offset="6">
            <div class="demoCol">6</div>
          </w-col>
        </w-row>
        <w-row class="demoRow" gutter="10">
          <w-col span="4">
            <div class="demoCol">4</div>
          </w-col>
          <w-col span="4" offset="4">
            <div class="demoCol">4</div>
          </w-col>
          <w-col span="4" offset="8">
            <div class="demoCol">4</div>
          </w-col>
        </w-row>
        <w-row class="demoRow" gutter="10">
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2" offset="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2" offset="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2" offset="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2">
            <div class="demoCol">2</div>
          </w-col>
          <w-col span="2" offset="2">
            <div class="demoCol">2</div>
          </w-col>
        </w-row>
      </div>
      <div class="code-content" style="height: 0;">
        <div class="code-content-height">
          <!--<div class="code-user-desc">-->
          <!--组件描述说明-->
          <!--</div>-->
          <pre v-highlightjs><code class="vue">{{codeShow3}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(2)" ref="xxx">
        <w-icon class="icon-down" :name="isShow[2] === false ? 'down' : 'up'"></w-icon>
        <span class="lock-code-word">{{isShow[2] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Icon from '../../../src/icon'
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'
  import Row from '../../../src/row'
  import Col from '../../../src/col'
  import VueHighlightJS from 'vue-highlightjs';
  import 'highlight.js/styles/atom-one-light.css';
  import mixin from '../mixin'
  Vue.use(VueHighlightJS)

  export default {
    name: 'demo',
    mixins: [mixin],
    components: {
      'w-button': Button,
      'w-icon': Icon,
      'w-button-group': ButtonGroup,
      'w-row': Row,
      'w-col': Col,
    },
    data() {
      return {
        codeShow: `
          <w-row class="demoRow">
            <w-col span="8">
              <div class="demoCol">8</div>
            </w-col>
            <w-col span="8">
              <div class="demoCol">8</div>
            </w-col>
            <w-col span="8">
              <div class="demoCol">8</div>
            </w-col>
          </w-row>

          <w-row class="demoRow">
            <w-col span="6">
              <div class="demoCol">6</div>
            </w-col>
            <w-col span="6">
              <div class="demoCol">6</div>
            </w-col>
            <w-col span="6">
              <div class="demoCol">6</div>
            </w-col>
            <w-col span="6">
              <div class="demoCol">6</div>
            </w-col>
          </w-row>

          <w-row class="demoRow">
            <w-col span="4">
              <div class="demoCol">4</div>
            </w-col>
            <w-col span="4">
              <div class="demoCol">4</div>
            </w-col>
            <w-col span="4">
              <div class="demoCol">4</div>
            </w-col>
            <w-col span="4">
              <div class="demoCol">4</div>
            </w-col>
            <w-col span="4">
              <div class="demoCol">4</div>
            </w-col>
            <w-col span="4">
              <div class="demoCol">4</div>
            </w-col>
          </w-row>

          <w-row class="demoRow">
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
          </w-row>
        `.replace(/^ {8}/gm, '').trim(),
        codeShow2:`
          <w-row class="demoRow" gutter="10">
            <w-col span="8">
              <div class="demoCol">8</div>
            </w-col>
            <w-col span="8">
              <div class="demoCol">8</div>
            </w-col>
            <w-col span="8">
              <div class="demoCol">8</div>
            </w-col>
          </w-row>
          <w-row class="demoRow" gutter="10">
            <w-col span="6">
              <div class="demoCol">6</div>
            </w-col>
            <w-col span="6">
              <div class="demoCol">6</div>
            </w-col>
            <w-col span="6">
              <div class="demoCol">6</div>
            </w-col>
            <w-col span="6">
              <div class="demoCol">6</div>
            </w-col>
          </w-row>
        `.replace(/^ {8}/gm, '').trim(),
        codeShow3:`
          <w-row class="demoRow" gutter="10">
            <w-col span="8">
              <div class="demoCol">8</div>
            </w-col>
            <w-col span="8" offset="8">
              <div class="demoCol">8</div>
            </w-col>
          </w-row>
          <w-row class="demoRow" gutter="10">
            <w-col span="6" offset="6">
              <div class="demoCol">6</div>
            </w-col>
            <w-col span="6" offset="6">
              <div class="demoCol">6</div>
            </w-col>
          </w-row>
          <w-row class="demoRow" gutter="10">
            <w-col span="4">
              <div class="demoCol">4</div>
            </w-col>
            <w-col span="4" offset="4">
              <div class="demoCol">4</div>
            </w-col>
            <w-col span="4" offset="8">
              <div class="demoCol">4</div>
            </w-col>
          </w-row>
          <w-row class="demoRow" gutter="10">
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2" offset="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2" offset="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2" offset="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2">
              <div class="demoCol">2</div>
            </w-col>
            <w-col span="2" offset="2">
              <div class="demoCol">2</div>
            </w-col>
          </w-row>
        `.replace(/^ {8}/gm, '').trim(),
      }
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  .demoRow{
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #C8E6C9;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
