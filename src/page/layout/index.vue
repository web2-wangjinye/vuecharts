<template>
  <el-container>
    <!-- <el-aside> -->
      <!-- 左侧导航栏 -->
      <!-- <sidebar></sidebar> -->
    <!-- </el-aside> -->
    <!-- <el-container> -->
      <!-- <el-header height="auto" > -->
        <!-- 顶部导航栏 -->
        <!-- <top/> -->
        <!-- 顶部标签卡 -->
        <!-- <tags/> -->
      <!-- </el-header> -->
      <el-main >
        <!-- 主体视图层 -->
        <keep-alive>
          <transition name="fade-transverse">
            <router-view  v-if="$route.meta.keepAlive"/>
          </transition>
        </keep-alive>
        <transition name="fade-transverse">
          <router-view  v-if="!$route.meta.keepAlive"/>
        </transition>
      </el-main>
    <!-- </el-container> -->
  </el-container>
</template>
<script>
import { tags, top, sidebar } from "./index"
export default {
  components: {
    top,
    tags,
    sidebar
  },
  name: "index",
  data() {
    return {
    };
  },
  created() {},
  mounted() {},
  computed: {
  },
  props: [],
  methods: {}
};
</script>

<style lang="stylus" scoped>
// 渗透到子组件改变样式 /deep/或者>>>
</style>