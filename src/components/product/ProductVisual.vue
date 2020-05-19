<template>
  <div class="product-visual">
    <div class="product-visual__wrapper">
      <div class="product-visual__photo-wrapper">
        <a
          href="https://www.facebook.com/medictel.eu"
          target="_blank"
          class="button secondary product-visual__button"
        >
          {{ $t('product.button') }}
        </a>
        <img
          class="product-visual__photo"
          src="@/assets/product-medictel.png"
          alt="Medictel"
        />
      </div>
      <div class="product-visual__background">
        <div class="product-visual__claim-wrapper">
          <p class="product-visual__claim">
            {{ $t('product.claim') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.product-visual__wrapper {
  display: flex;
  padding-top: 50px;
  position: relative;
  margin-top: 50px;
  @include md {
    margin-top: 0px;
    padding-top: 100px;
  }
}
.product-visual__button {
  position: absolute;
  top: 0;
  transform: translate(0, -61%);
  min-width: (2.5 / 14 * 100%);
  z-index: 3;
  margin-left: (1 / 14 * 100%);
  @include md {
    transform: none;
    top: auto;
    left: 0;
    bottom: 50px;
    margin-left: (1 / 14 * 100%);
    min-width: (2.5 / 14 * 100%);
  }
}
.product-visual__photo-wrapper {
  width: (10.5 / 14 * 100%);
  z-index: 2;
  position: relative;
  @include md {
    position: initial;
    width: (7.5 / 14 * 100%);
    margin-left: (3 / 14 * 100%);
  }
}
.product-visual__photo {
  display: block;
  width: 100%;
}
.product-visual__background {
  background: $color-secondary;
  width: (6 / 14 * 100%);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  @media (min-width: 420px) {
    width: (6.5 / 14 * 100%);
  }
}
.product-visual__claim-wrapper {
  width: 1px;
  height: 1px;
  background: red;
  position: absolute;
  right: (2 / 6.5 * 100%);
  bottom: 30px;
  @include md {
    bottom: 50px;
  }
}
.product-visual__claim {
  margin: 0;
  transform-origin: 0;
  transform: rotate(-90deg) translate(-5%, 50%);
  position: absolute;
  display: inline-block;
  font-size: 0.8rem;
  color: #fff;
  white-space: nowrap;
  bottom: 0;
  left: 0;
  @media (min-width: 420px) {
    font-size: 1rem;
  }
  @include md {
    font-size: 1.35rem;
  }
}
</style>
