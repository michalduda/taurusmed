import Vue from 'vue'

export const store = Vue.observable({
  menuActive: false,
  menuItems: [
    {
      id: 1,
      name: 'wirtualny gabinet',
      element: '#product'
    },
    {
      id: 2,
      name: 'rozwiązania indywidualne',
      element: '#solutions'
    },
    {
      id: 3,
      name: 'kontakt',
      element: '#contact'
    }
  ]
})

export const mutations = {
  setMenuActive(value) {
    store.menuActive = value
  }
}
