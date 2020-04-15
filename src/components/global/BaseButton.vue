<template functional>
  <button
    v-bind="data.attrs"
    :class="['base-button', {'base-button--is-loading': props.loading}, data.staticClass]"
    v-on="data.on"
  >
    <span class="base-button__content">
      <slot></slot>
    </span>
  </button>
</template>

<style lang="scss">
.base-button {
  background: #fff;
}
</style>
