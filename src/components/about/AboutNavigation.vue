<template>
  <nav class="about-navigation d-none d-md-block">
    <ul class="about-navigation__list">
      <template v-for="(item, index) in items">
        <li
          :key="item.id"
          class="about-navigation__item"
        >
          <a
            :href="item.element"
            class="about-navigation__link"
            @click="scrollToElement($event, item.element)"
          >
            {{ $t(item.name) }}
          </a>
        </li>
        <li
          v-if="items.length -1 !== index"
          :key="`${item.id}-separator`"
          class="about-navigation__item"
        >
          <span class="about-navigation__separator">
            /
          </span>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
import scrollToElement from '@/helpers/scrollToElement'
import { store } from '@/store'

export default {
  computed: {
    items() {
      return store.menuItems
    }
  },
  methods: {
    scrollToElement
  }
}
</script>

<style lang="scss">
.about-navigation {
  margin-bottom: 30px;
}
.about-navigation__list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
}
.about-navigation__item {
  flex: 0;
  @include lg {
    flex: 0 1 auto;
  }
}
.about-navigation__separator{
  color: $color-primary;
  margin: 0 10px;
}
.about-navigation__link {
  text-decoration: none;
}
</style>
