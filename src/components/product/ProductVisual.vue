<template>
  <div class="product-visual">
    <div class="product-visual__wrapper">
      <a class="button secondary product-visual__button">
        Zobacz Medictel
      </a>
      <div class="product-visual__photo-wrapper">
        <img
          class="product-visual__photo"
          src="@/assets/product-medictel.png"
          alt="Medictel"
        />
      </div>
      <div class="product-visual__background">
        <div class="product-visual__claim-wrapper">
          <p class="product-visual__claim">
            Aesthetics and functionality
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.product-visual__wrapper {
  display: flex;
  padding-top: 100px;
  position: relative;
}
.product-visual__button {
  position: absolute;
  bottom: 50px;
  margin-left: (1 / 14 * 100%);
  min-width: (2.5 / 14 * 100%);
  z-index: 3;
}
.product-visual__photo-wrapper {
  width: (7.5 / 14 * 100%);
  margin-left: (3 / 14 * 100%);
  position: relative;
  z-index: 2;
}
.product-visual__photo {
  display: block;
  width: 100%;
}
.product-visual__background {
  background: $color-secondary;
  width: (6.5 / 14 * 100%);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
}
.product-visual__claim-wrapper {
  width: 1px;
  height: 1px;
  background: red;
  position: absolute;
  right: (2 / 6.5 * 100%);
  bottom: 50px;
}
.product-visual__claim {
  margin: 0;
  transform-origin: 0;
  transform: rotate(-90deg) translate(-5%, 50%);
  position: absolute;
  display: inline-block;
  font-size: 1.35rem;
  color: #fff;
  white-space: nowrap;
  bottom: 0;
  left: 0;
}
</style>
