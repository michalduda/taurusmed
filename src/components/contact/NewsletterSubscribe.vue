<template>
  <form
    class="newsletter-subscribe"
    @submit="prepareForSubmit"
  >
    <div class="newsletter-subscribe__wrapper">
      <input
        v-model="email"
        type="text"
        name="email"
        class="newsletter-subscribe__email"
        placeholder="zapisz sie do newslettera"
        :disabled="formState === formStates.SENDING || formState === formStates.SENT"
        @keyup="validateEmail"
      />
      <base-button
        :disabled="formState === formStates.SENDING || formState === formStates.SENT"
        :loading="formState === formStates.SENDING"
        type="submit"
        class="newsletter-subscribe__button"
      >
        &gt;
      </base-button>
    </div>
    <p
      v-if="emailError"
      class="newsletter-subscribe__error-message"
    >
      {{ emailError }}
    </p>
    <p
      v-if="notification"
      class="newsletter-subscribe__notification"
      :class="{ 'newsletter-subscribe__notification--error': formState === formStates.ERROR }"
    >
      {{ notification }}
    </p>
  </form>
</template>

<script>
import validateEmailPattern from '@/helpers/validateEmail'
import { sendNewsletterSignup } from '@/services/Api'

export default {
  data() {
    return {
      email: null,
      emailError: null,
      formState: 'initial',
      formStates: {
        INITIAL: 'initial',
        SENDING: 'sending',
        SENT: 'sent',
        ERROR: 'error'
      },
      formTexts: {
        MESSAGE_SENT: 'Zapisano do newslettera',
        ERROR_SENDING: 'Wystąpił błąd podczas wysyłania',
        ERROR_INVALID_EMAIL: 'Wprowadź poprawny adres email'
      }
    }
  },
  computed: {
    notification() {
      switch (this.formState) {
        case this.formStates.SENT:
          return this.formTexts.MESSAGE_SENT
        case this.formStates.ERROR:
          return this.formTexts.ERROR_SENDING
        default:
          return null
      }
    }
  },
  methods: {
    validateEmail() {
      if (!this.email || !validateEmailPattern(this.email)) {
        return false
      } else {
        this.emailError = null
        return true
      }
    },
    clearForm() {
      this.email = null
      this.formState = this.formStates.INITIAL
    },
    prepareForSubmit(e) {
      e.preventDefault()

      let shouldSubmit = true

      if (!this.validateEmail()) {
        shouldSubmit = false
        this.emailError = this.formTexts.ERROR_INVALID_EMAIL
      }

      if (shouldSubmit) {
        this.submitForm()
      }
    },
    async submitForm() {
      this.formState = this.formStates.SENDING

      const formData = new FormData()
      formData.set('email', this.email)

      const sendingStatus = await sendNewsletterSignup(formData)

      if (sendingStatus) {
        this.handleSubmitSuccess()
      } else {
        this.handleSubmitError()
      }
    },
    handleSubmitSuccess() {
      this.formState = this.formStates.SENT
      setTimeout(() => {
        this.clearForm()
      }, 5000)
    },
    handleSubmitError() {
      this.formState = this.formStates.ERROR
      setTimeout(() => {
        this.formState = this.formStates.INITIAL
      }, 5000)
    }
  }
}
</script>

<style lang="scss">
.newsletter-subscribe__wrapper {
  display: flex;
  margin-bottom: 25px;
  @include md{
    margin-bottom: 0;
  }
}
.newsletter-subscribe__button.base-button{
  background: $color-primary ;
  color: #fff;
  width: 40px;
  height: 40px;
  padding: 0;
  &:focus {
    outline: none;
  }
  &[disabled]{
    background: gray;
  }
}
.newsletter-subscribe__email {
  width: calc(100% - 30px);
}
.newsletter-subscribe__notification {
  width: 100%;
  margin-bottom: 0;
  font-size: 0.8rem;
}
.newsletter-subscribe__notification--error{
  color: $color-primary;
}
.newsletter-subscribe__error-message {
  width: 100%;
  font-size: 0.8rem;
  margin: 0;
  color: $color-primary;
}
</style>
