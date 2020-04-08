<template>
  <ul class="child">
    <!-- <h2>首页欢迎页</h2>
    <el-button @click="tiaozhuan" type="primary">主要按钮</el-button>
    <div class="imgbg">
      <img src="~assets/image/1.jpeg" alt="">
    </div> -->
       <li id="chartline1"></li>
    <li id="chartpie1"></li>
  </ul>
</template>
<script>
import { login } from '@/api/api'
export default {
  created () {
    var params = {clinic_note: 'jjj', id: 1, userId: 2, token: 'sssss'}
    login(params).then(res=> {
      console.log(res)
    })
  },
  mounted() {
    this.$chart.line1('chartline1');
    this.$chart.pie1('chartpie1')
  },
  methods:{
    tiaozhuan(){
      this.$router.push({path:'/login'})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/theme/child.styl'
.child
  background #fff
  display flex
  justify-content space-around
  .yanshifugai
    border 1px solid red
    background yellow
    color red
  .imgbg
    color $mainBg
    background blue
    width 100px
    height 100px
    img
      width 100%
  li
    width 600px
    height 400px
    border 1px solid green
</style>
