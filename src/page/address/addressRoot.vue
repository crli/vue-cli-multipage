<template>
  <div id="address">
    <div class="div">{{value}}</div>
    <div class="box">{{list}}</div>
    <router-link to="address/addresschange">去子路由</router-link>
    <transition name="router-slid">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {homebanner} from '@server'
  export default {
    name: 'address',
    data () {
      return {
        value: 1,
        banner: {}
      }
    },
    components: {
    },
    async mounted () {
      this.$vux.loading.show({
        text: 'Loading'
      })
      let response = await homebanner()
      if (response.data.Error === 0) {
        this.banner = response.data.data
      }
    },
    computed: {
      ...mapState([
        'list'
      ])
    },
    // 相关操作事件
    methods: {}
  }
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
.div{
  @include wh(375px,100px);
  background: rebeccapurple;
}
  .box{
    font-size: 30px;/*px*/
  }
</style>
