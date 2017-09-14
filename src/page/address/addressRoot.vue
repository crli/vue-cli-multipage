<template>
  <div id="address">
    <div class="div">{{div}}</div>
    <div class="box">{{list}}</div>
    <group :title="value + ''">
      <datetime-range :title="'Choose'" start-date="2017-01-01" end-date="2017-02-02" :format="'daterange-format'" v-model="value" @on-change="onChange"></datetime-range>
    </group>
    <div>
      <group :title="'Basic Usage'">
        <x-switch :title="'default false'"></x-switch>
        <x-switch :title="'default true'" :inline-desc="value1 + ''" v-model="value1"></x-switch>
      </group>
      <group :title="'disabled'">
        <x-switch :title="'default false'" disabled></x-switch>
        <x-switch :title="'default true'" :value="true" disabled></x-switch>
      </group>
      <group :title="'prevent default'">
        <x-switch :title="'default false'" prevent-default v-model="value2" @on-click="onClick"></x-switch>
      </group>
      <group :title="'html title'">
        <x-switch disabled :title="'switch red'"></x-switch>
      </group>
    </div>
    <router-link to="address/addresschange">去子路由</router-link>
    <transition name="router-slid">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {homebanner} from '@server'
  import {XSwitch, Group, DatetimeRange, CellFormPreview, Cell} from 'vux'
  export default {
    name: 'address',
    data () {
      return {
        div: 1,
        banner: {},
        value: ['2017-01-15', '03', '05'],
        value1: true,
        value2: false
      }
    },
    components: {
      XSwitch,
      Group,
      DatetimeRange,
      CellFormPreview,
      Cell
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
    // 相关操作事件
    methods: {
      onChange (val) {
        console.log('change', val)
      },
      onClick (newVal, oldVal) {
        console.log(newVal, oldVal)
        this.$vux.loading.show({
          text: 'in processing'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.value2 = newVal
        }, 1000)
      }
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
</style>
