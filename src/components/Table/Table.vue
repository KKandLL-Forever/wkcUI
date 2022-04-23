<template>
  <div class="w-table-wrapper">
    <table
      class="w-table"
      :class="[
        border ? 'w-table--border' : '',
        stripe ? 'w-table--stripe' : ''
      ]"
    >
      <thead>
      <tr>
        <th><input type="checkbox" /></th>
        <th v-if="indexVisible">#</th>
        <th v-for="item in columns">
          {{item.label}}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in data">
        <td><input type="checkbox" @click="handleItemCheck($event,item,index)"/></td>
        <td v-if="indexVisible">{{index}}</td>
        <template v-for="column in columns">
          <td>{{item[column.prop]}}</td>
        </template>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    columns: {
      type: Array,
      default: []
    },
    data: {
      type: Array,
      default: []
    },
    indexVisible: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    stripe: {
      type: Boolean,
      default: false
    }
    
  },
  methods: {
    handleItemCheck(e,item,index){
      this.$emit('select',{checked: e.target.checked,item,index})
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../style/Table';
</style>
