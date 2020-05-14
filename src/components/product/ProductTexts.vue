<template>
  <div class="product-texts">
    <div class="row">
      <div class="col-12 offset-1 col-md-10 offset-md-2 col-lg-4">
        <img
          src="@/assets/medictel-1.0.svg"
          alt="Medictel logo"
          class="product-texts__logo"
        />
        <p
          class="product-texts__text bold"
        >
          {{ $t('product.text1') }}
        </p>
        <p
          class="product-texts__text"
        >
          {{ $t('product.text2') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.product-texts {
  @include sm {
    margin-bottom: 50px;
  }
  @include lg {
    margin-bottom: 0;
  }
}
.product-texts__text {
  &:last-of-type {
    margin-bottom: 0;
  }
}
.product-texts__logo {
  height: 25px;
  margin-bottom: 32px;
}
</style>
