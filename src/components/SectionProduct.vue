<template>
  <section class="product">
    <div class="row">
      <div class="col-sm-10 offset-sm-2">
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
import ProductTexts from '@/components/ProductTexts'
import ProductVisual from '@/components/ProductVisual'

export default {
  components: {
    ProductTexts,
    ProductVisual
  }
}
</script>

<style>
.product__header {
  text-align: right;
  margin-bottom: 0;
}
</style>
