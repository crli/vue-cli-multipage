<template>
  <div id="">
    <div class="div" @click="toAddress">单击去路由页面</div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
      }
    },
    // 加载数据
    mounted () {
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

</style>
