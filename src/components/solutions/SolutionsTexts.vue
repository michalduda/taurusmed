<template>
  <div class="solutions-texts">
    <h2
      class="solutions-texts__header"
      v-html="$t('solutions.header')"
    >
    </h2>
    <p
      class="solutions-texts__text bold"
      v-html="$t('solutions.text1')"
    >
    </p>
    <p
      class="solutions-texts__text"
      v-html="$t('solutions.text2')"
    ></p>
    <ul class="solutions-texts__list">
      <li v-html="$t('solutions.list[0]')">
      </li>
      <li v-html="$t('solutions.list[1]')">
      </li>
      <li v-html="$t('solutions.list[2]')">
      </li>
      <li v-html="$t('solutions.list[3]')">
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.solutions-texts{
  margin-bottom: 50px;
  @include lg{
    padding-right: 20%;
  }
}
.solutions-texts__header {
  width: 80%;
  margin-bottom: 50px;
  margin-top: 50px;

  @include sm{
    margin-top: 0.83em;
  }
}
.solutions-texts__text{
  margin-bottom: 25px;
}
.solutions-texts__list{
  padding-left: 20px;
  li {
    margin-bottom: 5px;
  }
}
</style>
