<template>
  <div class="hello">
    <h1>我是页面直接渲染的值{{count }}</h1>
    <h1>我是通过getters计算之后的值{{getStateCount }}</h1>
    <button @click="addFunc">count+</button>
    <button @click="reducFun">count-</button>
    <div>{{count}}</div>
    <div>{{getShow}}</div>
  </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  name: 'login',
  data () {
    return {
    }
  },
  computed: {
    ...mapState('top',[
      'count'
    ]),
    ...mapGetters('top',[
      'getShow',
      'getStateCount'
    ])
  },
  methods: {
    ...mapActions('top',[
      'addFun',
      'reducFunc'
    ]),
    addFunc(){
      this.addFun(10)
    },
    reducFun(){
      this.reducFunc()
    }
  }
}
</script>
<style scoped>
</style>
