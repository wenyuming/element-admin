// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import ElementUI from 'element-ui'
import config from './config'
import 'element-ui/lib/theme-chalk/index.css'
import api from './api'

Vue.use(VueRouter)
Vue.use(ElementUI)

// 全局公共方法
Vue.prototype.$api = api
Vue.prototype.config = config


const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 全局路由控制
  next()
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})
