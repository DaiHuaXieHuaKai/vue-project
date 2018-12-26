import Vue from 'vue'
import ElementUI from 'element-ui'
import Antd from 'ant-design-vue'
import App from './App.vue'
import {
  router
} from './router'
import store from './store'

import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'ant-design-vue/dist/antd.css'
import 'font-awesome/less/font-awesome.less'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')