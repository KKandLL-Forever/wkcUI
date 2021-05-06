<template>
  <div>
    <h2>API</h2>
    <div class="attr">
      <table>
        <thead>
        <tr>
          <th>参数</th>
          <th class="des">说明</th>
          <th class="type">类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>icon</td>
          <td class="des">icon 图标名</td>
          <td class="type">String</td>
          <td>——</td>
          <td>——</td>
        </tr>
        <tr>
          <td>position</td>
          <td class="des">icon 位置</td>
          <td class="type">String</td>
          <td>left , right</td>
          <td>left</td>
        </tr>
        <tr>
          <td>loading</td>
          <td class="des">带 loading 效果的按钮，当按钮被点击时会出现 loading 效果，再次点击 loading 效果消失</td>
          <td class="type">Boolean</td>
          <td>——</td>
          <td>false</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
  .code {
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
    font-size: 85%;
    margin: 0;
    padding: 0.2em 0.4em;
  }
</style>
