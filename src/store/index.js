import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', false, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  // console.log(moduleName)
  const value = modulesFiles(modulePath)
  // console.log(value)
  modules[moduleName] = value.default
  return modules
}, {})
export default new Vuex.Store({
	modules
})
