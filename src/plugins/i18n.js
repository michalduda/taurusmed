import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '@/store/messages'
import localStorageCheck from '@/helpers/localStorageCheck'

const defaultLocale = 'pl'
const locales = ['pl', 'en']

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: defaultLocale,
  messages
})
const hasLocalStorage = localStorageCheck()

const setStorageLocale = () => {
  if (hasLocalStorage) {
    const storageLocale = localStorage.getItem('locale')
    if (storageLocale) {
      const isAvailable = locales.includes(storageLocale)
      if (isAvailable) {
        i18n.locale = storageLocale
      }
    }
  }
}

const setLocale = (newLocale) => {
  i18n.locale = newLocale
  if (hasLocalStorage) {
    localStorage.setItem('locale', newLocale)
  }
}

setStorageLocale()

export default i18n
export { locales, setLocale }
