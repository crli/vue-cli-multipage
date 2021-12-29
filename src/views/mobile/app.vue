<!--
 * @Author: crli
 * @Date: 2020-06-30 13:31:02
 * @LastEditors: crli
 * @LastEditTime: 2021-12-29 13:59:26
 * @Description: file content
-->
<template>
  <div class="home">
    mobile
    <!-- <img alt="Vue logo" src="../../assets/images/1.jpg"> -->
    <!-- <Button type="primary">主要按钮</Button>
    <Button type="info">信息按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">危险按钮</Button>
    <CellGroup>
      <Cell title="单元格" value="内容" />
      <Cell title="单元格" value="内容" label="描述信息" />
    </CellGroup> -->
    <!-- <Calendar v-model="show" /> -->
  </div>
</template>

<script>
import { login, xxxxxx } from '@/server/user'
import crliutils, {isEmail} from 'crliutils'
import { Button, Cell, CellGroup, Calendar } from 'vant'
export default {
  name: 'app',
  components: {
    Button,
    Cell,
    CellGroup,
    Calendar
  },
  data () {
    return {
      num: 1,
      show: true
    }
  },
  mounted () {
    console.log(crliutils)
    console.log(isEmail)
    login({lang: "zh-CN"}, {pageNum: 1, pageSize: 10}).then((res) => {
      console.log(res)
    })
    // xxxxxx({lang: "zh-CN"}, {pageNum: 1, pageSize: 10}).then((res) => {
    //   console.log(res)
    // })
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/mixin";
</style>
