# 一个Vue UI组件
[![Build Status](https://travis-ci.org/Jiansitewang/Components-practice.svg?branch=master)](https://travis-ci.org/Jiansitewang/Components-practice)
## 介绍

这是我为了学习 Vue 而做的UI

## Get start

1. 添加CSS样式
    本项目需要在CSS中开启border-box
    ```
    *,*::before,*::after{box-sizing: border-box;}
    ```
    你还需要设置默认颜色等变量
    ```
    html {
          --button-height: 32px;
          --font-size: 14px;
          --button-bg: white;
          --button-active-bg: #eee;
          --border-radius: 4px;
          --color: #333;
          --border-color: #999;
          --border-color-hover: #666
        }
    ```

2. 安装wkc
    ```
    npm i --save wkc
    ```
3. 引入wkc
    ```
    import {Button, ButtonGroup, Icon} from 'frank-test-1-1'
    import 'wkc/dist/index.css'

    export default {
      name: 'app',
      components: {
        'g-button': Button,
        'g-icon': Icon
      }
    }
    ```

## Document
