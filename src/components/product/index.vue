<template>
  <section class="product">
    <div class="row">
      <div class="col-12 offset-1 col-md-10 offset-md-2">
        <h2 class="product__header">
          Wirtualny gabinet
        </h2>
      </div>
    </div>
    <product-texts />
    <product-visual />
  </section>
</template>

<script>
import ProductTexts from './ProductTexts'
import ProductVisual from './ProductVisual'

export default {
  components: {
    ProductTexts,
    ProductVisual
  }
}
</script>

<style lang="scss">
.product__header {
  text-align: right;
  margin-top: 0;
  margin-bottom: 50px;
  @include sm{
    margin-bottom: 0;
    margin-top: 0.83em;
  }
}
</style>
