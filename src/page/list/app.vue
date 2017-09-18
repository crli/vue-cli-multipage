<template>
  <div id="">
    <div class="div" @click="toAddress">单击去路由页面a2</div>
    <tpl headfont></tpl>
  </div>
</template>

<script>
  import { Indicator } from 'mint-ui'
  import tpl from '@components/tpl'
  export default {
    components: {
      tpl
    },
    data () {
      return {
      }
    },
    // 加载数据
    mounted () {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      setTimeout(function () {
        Indicator.close()
      }, 3000)
    },
    // 相关操作事件
    methods: {
      toAddress () {
        window.location.href = 'address.html'
      }
    }
  }
</script>

<style scoped lang="scss">
  .div{
    font-size: 16px
  }
</style>
