<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { IsIE } from './utils/method'
export default {
  name: "App",
  mounted(){
    if (IsIE) {
      window.addEventListener('hashchange', () => {
        var currentPath = window.location.hash.slice(1);
        if (this.$route.path !== currentPath) {
        this.$router.push(currentPath)
      }
    }, false)
    }
  }
};
</script>

<style lang="stylus">
</style>
