<template>
  <div class="tabs-item" @click="clickEmitName" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tabs-item",
    inject: ['eventBus'],
    data(){
      return {
        active: false
      }
    },
    props:{
      disabled:{
        type: Boolean,
        default: false
      },
      name:{
        type: String | Number,
        require: true
      },
    },
    computed:{
      classes(){
        return {
          active:this.active,
          disabled: this.disabled
        }
      }
    },
    created() {
      if (this.eventBus){
        this.eventBus.$on('update:selected',(name)=>{
          if (name === this.name){
            this.active = true
          }else{
            this.active = false
          }
        })
      }
    },

    methods:{
      clickEmitName(){
        if (this.disabled){return}
        this.eventBus.$emit('update:selected',this.name,this)
        this.$emit('click',this)
      }
    }

  }
</script>

<style scoped lang="scss">
  $blue: #108EE9;
  $disabled-text-color: #888888;
  .tabs-item{
    height: 100%;
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    display: flex;
    align-items: center;
    &.active{
      color: $blue;
      font-weight: bold;
    }
    &.disabled{
      color: $disabled-text-color;
      cursor: not-allowed;
    }
  }

</style>
