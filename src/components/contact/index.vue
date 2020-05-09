<template>
  <section class="contact">
    <div class="row">
      <div class="col-12 offset-1 col-xl-8 offset-xl-3">
        <h2 class="contact__header">
          Kontakt
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12 offset-1 col-md-5 offset-md-1 col-xl-3 offset-xl-3">
        <div class="contact__info">
          <img
            src="@/assets/taurusmed-logo.svg"
            alt="Taurusmed logo"
            class="contact__logo"
          />
          <div class="contact__texts">
            <a
              class="contact__link"
              href="mailto:kontakt@taurusmed.pl"
            >
              kontakt@taurusmed.pl
            </a>
            <br />
            <a
              class="contact__link"
              href="tel:+48666666666"
            >
              666 666 666
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 offset-1 col-md-7 offset-md-0 col-xl-6 offset-xl-0 contact-column__padded">
        <contact-form />
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from './ContactForm'
export default {
  components: {
    ContactForm
  }
}
</script>

<style lang="scss">
.contact__logo {
  height: 15px;
  margin-top: 15px;
}
.contact__texts {
  margin: 25px 0 40px 0;
}
.contact__link {
  text-decoration: none;
  color: inherit;
}
.contact-column__padded {
  @include md {
    padding-left: 4.167%;
    display: flex;
  }
}
</style>
