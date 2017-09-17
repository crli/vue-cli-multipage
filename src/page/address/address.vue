<template>
  <div id="address">
  <router-link to="address/addresschange" class="s">去子路由</router-link>
    <transition name="router-slid">
      <router-view></router-view>
    </transition>
    <div class="div">{{div}}</div>
    <div class="box">{{list}}</div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {homebanner} from '@server'
  export default {
    name: 'address',
    data () {
      return {
        div: 1
      }
    },
    components: {
    },
    async mounted () {
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
    methods: {
    }
  }
</script>

<style scoped lang="scss">
@import "../../assets/css/mixin";
.div{
  @include wh(375px,100px);
  text-align: center;
  line-height: 100px;
  background: rebeccapurple;
  font-size: 16px;
}
  .box{
    text-align: center;
    line-height: 100px;
    font-size: 16px;
    @include wh(100%,100px);
    background: #eee;
  }
  .s{
    font-size: 20px;
    color: red
  }
</style>
