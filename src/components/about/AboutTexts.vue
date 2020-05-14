<template>
  <div class="about-texts">
    <h2 class="about-texts__header">
      {{ $t('about.header') }}
    </h2>
    <p
      class="about-texts__text bold"
      v-html="$t('about.text1')"
    >
    </p>
    <p
      class="about-texts__text"
      v-html="$t('about.text2')"
    >
    </p>
    <p
      class="about-texts__text"
      v-html="$t('about.text3')"
    >
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.about-texts{
  margin-bottom: 50px;
}
.about-texts__header {
  width: 80%;
  margin-bottom: 50px;
  margin-top: 50px;
  @include sm{
    margin-top: 0.83em
  }
}
.about-texts__text{
  margin-bottom: 25px;
}
</style>
