<template>
  <div class="row">
    <div class="col-sm-7">
      <div class="image-text__visual-wrapper">
        <div
          class="image-text__visual"
          v-bind="{ style }"
        >
          <div class="visual-slot">
            <slot name="visual-slot" />
          </div>
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
    mode() {
      return this.$screen.mode
    },
    backgroundImage() {
      if (this.visual.elementMobile) {
        return this.mode === 'mobile' ? this.visual.elementMobile : this.visual.element
      } else {
        return this.visual.element
      }
    },
    style() {
      return `
        background-image: url(${this.backgroundImage});
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
  position: relative;
  padding-bottom: (330/430*100%);
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
.visual-slot{
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
}
.image-text__text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
