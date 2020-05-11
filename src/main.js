import Vue from 'vue'
import App from './App.vue'
import registerGlobalComponents from '@/registerGlobalComponents'
import watchViewportWidth from '@/plugins/watchViewportWidth'
import i18n from '@/plugins/i18n'

Vue.config.productionTip = false
registerGlobalComponents(Vue)

Vue.use(watchViewportWidth)

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
