<template>
  <div class="header-hamburger">
    <div
      class="hamburger hamburger--stand"
      :class="{'is-active': isActive}"
      @click="toggleActive"
    >
      <div class="hamburger-box">
        <div class="hamburger-inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { store, mutations } from '@/store'
export default {
  computed: {
    isActive() {
      return store.menuActive
    }
  },
  methods: {
    toggleActive() {
      mutations.setMenuActive(!this.isActive)
    }
  }
}
</script>

<style>
.header-hamburger{
  position: relative;
  z-index: 3;
}
</style>
