<template>
  <div class="demo">
    <div class="hWrapper">
      <w-icon class="h2Icon" name="link"></w-icon>
      <h2>简单用法</h2>
    </div>
    <p>预览</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div>
          <w-button>默认按钮</w-button>
          <w-button type="primary">主要按钮</w-button>
          <w-button type="success">成功按钮</w-button>
          <w-button type="info">信息按钮</w-button>
          <w-button type="warning">警告按钮</w-button>
          <w-button type="danger">危险按钮</w-button>
        </div>
        <div>
          <w-button plain>默认按钮</w-button>
          <w-button plain type="primary">主要按钮</w-button>
          <w-button plain type="success">成功按钮</w-button>
          <w-button plain type="info">信息按钮</w-button>
          <w-button plain type="warning">警告按钮</w-button>
          <w-button plain type="danger">危险按钮</w-button>
        </div>
        <div>
          <w-button circle icon="setting"></w-button>
          <w-button circle type="primary" icon="setting"></w-button>
          <w-button circle type="success" icon="setting"></w-button>
          <w-button circle type="info" icon="setting"></w-button>
          <w-button circle type="warning" icon="setting"></w-button>
          <w-button circle type="danger" icon="setting"></w-button>
        </div>
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
      <h2>disabled状态</h2>
    </div>
    <p>预览</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div>
          <w-button disabled icon="setting" >默认按钮</w-button>
          <w-button disabled type="primary" icon="setting">主要按钮</w-button>
          <w-button disabled type="success" icon="setting">成功按钮</w-button>
          <w-button disabled type="info">信息按钮</w-button>
          <w-button disabled type="warning">警告按钮</w-button>
          <w-button disabled type="danger">危险按钮</w-button>
        </div>
        <br>
        <div>
          <w-button disabled plain icon="setting">默认按钮</w-button>
          <w-button disabled plain type="primary" icon="setting">主要按钮</w-button>
          <w-button disabled plain type="success">成功按钮</w-button>
          <w-button disabled plain type="info">信息按钮</w-button>
          <w-button disabled plain type="warning">警告按钮</w-button>
          <w-button disabled plain type="danger">危险按钮</w-button>
        </div>
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
      <h2>文字样式</h2>
    </div>
    <p>预览</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div>
          <w-button type="text">文字按钮</w-button>
          <w-button disabled type="text">文字按钮</w-button>
        </div>
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
      <h2>图标按钮</h2>
    </div>
    <p>预览</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div>
          <w-button icon="setting"></w-button>
          <w-button icon="like"></w-button>
          <w-button icon="info-circle"></w-button>
          <w-button icon="bofangqi">播放器</w-button>
          <w-button>点赞<w-icon name="like"></w-icon></w-button>
        </div>
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
      <h2>Loading状态</h2>
    </div>
    <p>预览</p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <div>
          <w-button icon="setting" :loading="loading2" @click="loading2 = !loading2">
            按钮
          </w-button>
          <w-button icon="setting" :loading="loading3" @click="loading3 = !loading3" icon-position="right">
            按钮
          </w-button>
        </div>
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
        <w-icon class="icon-down" :name="isShow[1] === false ? 'arrow-down' : 'arrow-up'"></w-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Icon from '../../../src/components/icon'
import Button from '../../../src/components/Button'
import ButtonGroup from '../../../src/components/button-group'
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
