<template>
  <nav class="about-navigation">
    <ul class="about-navigation__list">
      <template v-for="(item, index) in items">
        <li class="about-navigation__item" :key="item.id">
          <a :href="item.element" class="about-navigation__link">{{ item.name }}</a>
        </li>
        <li v-if="items.length -1 !== index" class="about-navigation__item" :key="`${item.id}-separator`">
          <span class="about-navigation__separator">
            /
          </span>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'wirtualny gabinet',
          element: '#virtual-office'
        },
        {
          id: 2,
          name: 'rozwiązania indywidualne',
          element: '#individual-solutions'
        },
        {
          id: 3,
          name: 'kontakt',
          element: '#contact'
        }
      ]
    }
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
  margin: 0 10px;
}
.about-navigation__link {
  text-decoration: none;
}
</style>
