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
          <td>ipad,narrow-pc,pc,wide-pc</td>
          <td
              class="des"
          >不同屏幕宽度下分栏所占宽度的配置参数，键对应分栏所占宽度，值对应分栏前空隙宽度。mobile-first，ipad、narrow-pc、pc、wide-pc对应 min-width 分别为 577px、769px、993px、1201px</td>
          <td class="type">Object</td>
          <td>ipad,narrow-pc,pc,wide-pc</td>
          <td>--</td>
        </tr>
        <tr>
          <td>offset</td>
          <td
              class="des"
          >偏移量</td>
          <td class="type">String,Number</td>
          <td>--</td>
          <td>--</td>
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
