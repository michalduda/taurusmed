<template>
  <div class="row">
    <div class="col-sm-7">
      <div class="image-text__visual-wrapper">
        <div
          class="image-text__visual"
          v-bind="{ style }"
        >
          <slot name="visual-slot" />
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-5 offset-1 image-text__text-wrapper">
      <slot name="default" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visual: {
      required: true,
      type: Object
    }
  },
  computed: {
    style() {
      return `
        background-image: url(${this.visual.element});
        background-position: ${this.visual.position || 'center'}
      `
    }
  }
}
</script>

<style lang="scss">
.image-text__visual-wrapper {
  background: $color-primary;
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
  @include sm {
    width: 92.857%;
  }
}
.image-text__visual {
  mix-blend-mode: screen;
  background-size: cover;
  width: 57.143%;
  min-height: 420px;
  display: flex;
  align-items: flex-end;
  @include sm {
    width: 100%;
    min-height: 590px;
  }
  @include lg {
    width: 53.846%;
    min-height: 590px;
  }
}
.image-text__text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
