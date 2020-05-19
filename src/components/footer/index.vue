<template functional>
  <footer>
    <div class="row">
      <div class="col-12 offset-1 col-xl-8 offset-xl-3">
        <div class="social-links">
          <a
            href="https://www.facebook.com/taurusmed.eu"
            target="_blank"
            class="social-links__link"
          >
            <img
              src="@/assets/social/facebook.svg"
              alt="facebook"
              class="social-links__image"
            >
          </a>
          <a
            href="https://www.instagram.com/taurusmed_eu/"
            target="_blank"
            class="social-links__link"
          >
            <img
              src="@/assets/social/instagram.svg"
              alt="instagram"
              class="social-links__image"
            >
          </a>
          <a
            href="https://twitter.com/taurusmed_eu"
            target="_blank"
            class="social-links__link"
          >
            <img
              src="@/assets/social/twitter.svg"
              alt="twitter"
              class="social-links__image"
            >
          </a>
          <a
            href="https://www.linkedin.com/company/taurusmed/"
            target="_blank"
            class="social-links__link"
          >
            <img
              src="@/assets/social/linkedin.svg"
              alt="linkedin"
              class="social-links__image"
            >
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.social-links{
  @include md{
    transform: translateY(-100%);
  }
}
.social-links__link{
  margin-right: 10px;
  display: inline-block;
}
.social-links__image{
  height: 20px;
  display: inline-block;
}
</style>
