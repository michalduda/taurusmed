<template>
  <transition name="fade">
    <nav
      v-if="isActive"
      class="navigation-menu__modal"
    >
      <ul class="navigation-menu__list">
        <li
          v-for="(item) in items"
          :key="item.id"
          class="navigation-menu__item"
        >
          <a
            :href="item.element"
            class="navigation-menu__link"
            @click="handleScroll($event, item.element)"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>
  </transition>
</template>

<script>
import scrollToElement from '@/helpers/scrollToElement'
import { store, mutations } from '@/store'

export default {
  computed: {
    isActive() {
      return store.menuActive
    },
    items() {
      return store.menuItems
    },
    screenWidth() {
      return this.$screen.width
    }
  },
  methods: {
    handleScroll(event, element) {
      event.preventDefault()
      scrollToElement(event, element)
      mutations.setMenuActive(false)
    }
  },
  watch: {
    isActive() {
      if (this.isActive) {
        document.body.classList.add('body--no-overflow')
      } else {
        document.body.classList.remove('body--no-overflow')
      }
    },
    screenWidth() {
      if (this.isActive) {
        if (this.screenWidth > 768) {
          mutations.setMenuActive(false)
        }
      }
    }
  }
}
</script>

<style>
.navigation-menu__modal {
  position: fixed;
  z-index: 2;
  background: #fff;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.navigation-menu__list{
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.navigation-menu__item{
  margin: 3rem 0;
}
.navigation-menu__link{
  text-transform: uppercase;
  font-size: 1.75rem;
  text-decoration: none;
  font-weight: 600;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
