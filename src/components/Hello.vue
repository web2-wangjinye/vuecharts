<template>
  <div class="hello">
    <el-button class="yanshifugai" type="primary">主要按钮</el-button>
  <el-button type="text" @click="open">点击打开 Message Box</el-button>
    <h1>我是页面直接渲染的值{{this.$store.state.count }}</h1>
    <h1>我是通过getters计算之后的值{{this.$store.getters.getStateCount }}</h1>
    <p>count的值,{{this.$store.state.count }}</p>
    <button @click="addFunc">count+</button>
    <button @click="reducFunc">count-</button>
    <div>{{count1}}</div>
    <div>{{isShow}}</div>
    <div class="aa"></div>
    <!-- <style lang="less" rel="stylesheet/less" type="text/less" scoped> -->
  </div>
</template>
<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  name: 'hi',
  data () {
    return {
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    }
  },
  computed: {
    ...mapState({
      count1:state=>state.top.count
    }),
    ...mapGetters('footerStatus',[
      'isShow'
    ])
  },
  methods: {
    ...mapActions('top',[
      'addFun'
    ]),
    addFunc(){
      this.addFun(10)
    },
    reducFunc(){
      this.$store.commit("reduc")
    },
    open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
  }
}
</script>
<style lang="stylus" scoped>
.yanshifugai
  background red
  color yellow
.aa
  width 200px
  height 200px
  background url('~assets/image/1.jpeg') no-repeat center center
  background-size cover
</style>
