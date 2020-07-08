<!--
 * @Author: crli
 * @Date: 2020-06-30 13:31:02
 * @LastEditors: crli
 * @LastEditTime: 2020-07-08 15:24:16
 * @Description: file content
-->
<template>
  <div class="home">
    <div class="view">
      pc
      <div class="inside">
        <transition name="component-fade" mode="out-in">
          <component :is="num" aaa="111"></component>
        </transition>
      </div>
    </div>
    <navbar class="navbar" @changeData="getData"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import img1 from '@/assets/images/1.jpg'
import img2 from '@/assets/images/2.jpg'
import { login } from '@/server/user'
export default {
  name: 'app',
  components: {
    Navbar,
    // 'v-0': Navbar,
    'v-0': {
      template: `<img src="${img1}">`
    },
    'v-1': {
      template: `<img src="${img2}">`
    }
  },
  data () {
    return {
      imglist: [img1, img2],
      num: 'v-0'
    }
  },
  mounted () {
    login().then((res) => {
      console.log(res)
    })
  },
  methods: {
    getData (v) {
      if (v % 2 === 0) {
        this.num = 'v-0'
      } else {
        this.num = 'v-1'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/mixin";
.home{
  width: 100%;
  height: 100%;
  display: flex;
  .view{
    flex: 1;
    background: cornsilk;
    position: relative;
    img{
      width: 200px;
    }
    .inside{
      width: 1200px;
      height: 600px;
      @include center
    }
  }
  .navbar{
    width: 100px;
  }
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
