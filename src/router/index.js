import Vue from 'vue'
import Router from 'vue-router'
import PageRouter from './page/'
import ViewsRouter from './views/'
Vue.use(Router)
export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  },
  routes: [
        ...PageRouter,
        ...ViewsRouter
      ]
})
