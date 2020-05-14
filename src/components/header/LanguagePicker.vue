<template>
  <div class="language-picker">
    <ul class="language-picker__list">
      <li
        v-for="locale in locales"
        :key="locale"
        class="language-picker__item"
        :class="{'language-picker__item--active': $i18n.locale === locale}"
      >
        <a
          href="#"
          class="language-picker__link"
          @click="changeLocale($event, locale)"
        >
          {{ locale }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { locales, setLocale } from '@/plugins/i18n'
export default {
  data() {
    return {
      locales
    }
  },
  methods: {
    changeLocale(event, locale) {
      event.preventDefault()
      setLocale(locale)
    }
  }
}
</script>

<style lang="scss">
.language-picker{}
.language-picker__list{
  margin: 0;
  padding: 0;
  display: flex;
  list-style-type: none;
}
.language-picker__item{
  &:not(:last-of-type):after{
    content:"/";
    display: inline-block;
    margin: 0 5px;
  }
}
.language-picker__item--active{
  .language-picker__link{
    font-weight: bold;
  }
}
.language-picker__link{
  color: inherit;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
}
</style>
