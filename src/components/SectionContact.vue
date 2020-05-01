<template>
  <section class="contact">
    <div class="row">
      <div class="col-sm-8 offset-sm-3">
        <h2 class="contact__header">
          Kontakt
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3 offset-sm-3">
        <div class="contact__info">
          <img
            src="@/assets/taurusmed-logo.svg"
            alt="Taurusmed logo"
            class="contact__logo"
          >
          <div class="contact__texts">
            <a
              class="contact__link"
              href="mailto:kontakt@taurusmed.pl"
            >
              kontakt@taurusmed.pl
            </a><br />
            <a
              class="contact__link"
              href="tel:+48666666666"
            >
              666 666 666
            </a>
          </div>
          <newsletter-subscribe />
        </div>
      </div>
      <div class="col-sm-6 contact-column__padded">
        <contact-form />
      </div>
    </div>
  </section>
</template>

<script>
import NewsletterSubscribe from '@/components/NewsletterSubscribe'
import ContactForm from '@/components/ContactForm'
export default {
  components: {
    NewsletterSubscribe,
    ContactForm
  }
}
</script>

<style>
.contact__header{
}
.contact__logo{
  height: 15px;
  margin-top: 15px;
}
.contact__texts{
  margin: 25px 0 40px 0;
}
.contact__link{
  text-decoration: none;
  color: inherit;
}
.contact-column__padded{
  padding-left: 4.167%;
  display: flex;
}
</style>
