<template functional>
  <button
    v-bind="data.attrs"
    :class="['base-button', {'base-button--is-loading': props.loading}, data.staticClass]"
    v-on="data.on"
  >
    <span
      class="base-button__content"
    >
      <slot></slot>
    </span>
    <base-loader
      v-if="props.loading"
      class="base-button__loader"
    />
  </button>
</template>

<style lang="scss">
.base-button {
  background: #fff;
}
.base-button--is-loading{
  .base-button__content{
    visibility: hidden;
  }
}
.base-button__loader {
  height: 1.5em !important;
  width: 1.5em !important;
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
