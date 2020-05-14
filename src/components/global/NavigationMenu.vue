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
            {{ $t(item.name) }}
          </a>
        </li>
      </ul>
      <language-picker class="language-picker--mobile" />

    </nav>
  </transition>
</template>

<script>
import scrollToElement from '@/helpers/scrollToElement'
import { store, mutations } from '@/store'
import LanguagePicker from '@/components/header/LanguagePicker'

export default {
  components: {
    LanguagePicker
  },
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

<style lang="scss">
.navigation-menu__modal {
  position: fixed;
  z-index: 2;
  background: #fff;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
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
  font-size: 1.75rem;
  text-decoration: none;
}
.language-picker--mobile{
  .language-picker__item{
    font-size: 1.75rem;
    color: $color-primary;
  }
  .language-picker__link{
    text-transform: lowercase;
    margin: 0 15px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
