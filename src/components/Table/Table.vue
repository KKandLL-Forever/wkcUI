<template>
  <div class="w-table-wrapper">
    <div class="w-table--loading" v-if="loading">
      <w-icon name="loading"></w-icon>
    </div>
    <table
      class="w-table"
      :class="[
        border ? 'w-table--border' : '',
        stripe ? 'w-table--stripe' : ''
      ]"
    >
      <thead>
      <tr>
        <th><input type="checkbox" ref="allChecked" @click="handleAllCheck" :checked="areAllSelected"/></th>
        <th v-if="indexVisible">#</th>
        <th v-for="item in columns">
          {{item.label}}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in data" :key="item.key">
        <td>
          <input type="checkbox" :checked="inSelectedItems(item)" @click="handleItemCheck($event,item,index)"/>
        </td>
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
      default: () => []
    },
    data: {
      type: Array,
      default: () => [],
      validator (array) {
        return !(array.filter(item => item.key === undefined).length > 0)
      }
    },
    selected: {
      type: Array,
      default: () => []
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
    },
    loading: {
      type: Boolean,
      default: false
    }
    
  },
  computed: {
    areAllSelected () {
      const a = this.data.map(item => item.id).sort()
      const b = this.selected.map(item => item.id).sort()
      if (a.length !== b.length) { return false }
      let equal = true
      for (let i = 0; i < a.length; i++)
        if (a[i] !== b[i]) {
        equal = false
        break
      }
      return equal
    },
  },
  watch: {
    selected () {
      if (this.selected.length === this.data.length) {
        this.$refs.allChecked.indeterminate = false
      } else if (this.selected.length === 0) {
        this.$refs.allChecked.indeterminate = false
      } else {
        this.$refs.allChecked.indeterminate = true
      }
    }
  },
  methods: {
    inSelectedItems (item) {
      return this.selected.filter(i => i.key === item.key).length > 0
    },
    handleItemCheck (e,item, index) {
      let selected = e.target.checked
      let copy = JSON.parse(JSON.stringify(this.selected))
      if (selected) {
        copy.push(item)
      } else {
        copy = copy.filter(i => i.id !== item.id)
      }
      this.$emit('update:selected', copy)
    },
    handleAllCheck (e) {
      let selected = e.target.checked
      this.$emit('update:selected', selected ? this.data : [])
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../style/Table';
</style>
