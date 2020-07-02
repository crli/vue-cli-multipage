<!--
 * @Author: crli
 * @Date: 2020-06-30 16:01:16
 * @LastEditors: crli
 * @LastEditTime: 2020-07-01 17:16:17
 * @Description: file content
-->
<template>
  <div class="navbar">
    <div v-for="v in 10" class="nav-item" @click="toaaa(v)" :key="v">{{v}}</div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {}
  },
  methods: {
    toaaa (v) {
      console.log(v)
      this.$emit('changeData', v)
      // if (v % 2 === 0) {
      //   ctx.$router.push({ name: 'About' })
      // } else {
      //   ctx.$router.push({ name: 'Home' })
      // }
    }
  },
  props: {
    aaa: {
      default: '1'
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  background: gold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  .nav-item{
    flex: 1;
    align-items: center;
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 22px;
  }
}
</style>
