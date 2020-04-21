import Vue from 'vue'
import App from './App.vue'
import registerGlobalComponents from '@/registerGlobalComponents'

Vue.config.productionTip = false
registerGlobalComponents(Vue)

new Vue({
  render: h => h(App)
}).$mount('#app')
