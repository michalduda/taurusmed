import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '@/store/messages'

const defaultLang = 'pl'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: defaultLang,
  messages
})

export default i18n
