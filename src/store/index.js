import Vue from 'vue'

export const store = Vue.observable({
  menuActive: false,
  menuItems: [
    {
      id: 1,
      name: 'nav.product',
      element: '#product'
    },
    {
      id: 2,
      name: 'nav.solutions',
      element: '#solutions'
    },
    {
      id: 3,
      name: 'nav.contact',
      element: '#contact'
    }
  ]
})

export const mutations = {
  setMenuActive(value) {
    store.menuActive = value
  }
}
