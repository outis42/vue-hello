import Vue from 'vue'
import App from './App.vue'


import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Router)

import router from './router'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
