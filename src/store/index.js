import Vue from 'vue'

export const store = Vue.observable({
  menuActive: false,
  menuItems: [
    {
      id: 1,
      name: 'wirtualny gabinet',
      element: 'section.product'
    },
    {
      id: 2,
      name: 'rozwiązania indywidualne',
      element: 'section.solutions'
    },
    {
      id: 3,
      name: 'kontakt',
      element: 'section.contact'
    }
  ]
})

export const mutations = {
  setMenuActive(value) {
    store.menuActive = value
  }
}
