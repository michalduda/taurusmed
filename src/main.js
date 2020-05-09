import Vue from 'vue'
import App from './App.vue'
import registerGlobalComponents from '@/registerGlobalComponents'
import watchViewportWidth from '@/plugins/watchViewportWidth'

Vue.config.productionTip = false
registerGlobalComponents(Vue)

Vue.use(watchViewportWidth)

new Vue({
  render: h => h(App)
}).$mount('#app')
