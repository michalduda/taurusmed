<template>
  <form
    class="contact-form"
    @submit="prepareForSubmit"
  >
    <input
      v-model="email"
      type="text"
      name="email"
      class="contact-form__email"
      placeholder="email"
      :disabled="formState === formStates.SENDING || formState === formStates.SENT"
      @keyup="validateEmail"
    />
    <p
      v-if="emailError"
      class="contact-form__error-messages"
    >
      {{ emailError }}
    </p>

    <textarea
      v-model="message"
      name="message"
      class="contact-form__message"
      placeholder="napisz wiadomość"
      :disabled="formState === formStates.SENDING || formState === formStates.SENT"
      @keyup="validateMessage"
    ></textarea>
    <p
      v-if="messageError"
      class="contact-form__error-messages"
    >
      {{ messageError }}
    </p>

    <p
      v-if="notification"
      class="contact-form__notification"
      :class="{ 'contact-form__notification--error': formState === formStates.ERROR }"
    >
      {{ notification }}
    </p>

    <base-button
      :disabled="formState === formStates.SENDING || formState === formStates.SENT"
      :loading="formState === formStates.SENDING"
      class="contact-form__button"
      type="submit"
    >
      Wyślij wiadomość
    </base-button>
  </form>

</template>

<script>
import validateEmailPattern from '@/helpers/validateEmail'
import { sendContactForm } from '@/services/Api'

export default {
  data() {
    return {
      email: null,
      emailError: null,
      message: null,
      messageError: null,
      formState: 'initial',
      formStates: {
        INITIAL: 'initial',
        SENDING: 'sending',
        SENT: 'sent',
        ERROR: 'error'
      },
      formTexts: {
        MESSAGE_SENT: 'Twoja wiadomość została wysłana',
        ERROR_SENDING: 'Wystąpił błąd podczas wysyłania wiadomości',
        ERROR_NO_MESSAGE: 'Wprowadź wiadomość',
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
    validateMessage() {
      if (!this.message) {
        return false
      } else {
        this.messageError = null
        return true
      }
    },
    clearForm() {
      this.message = null
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
      if (!this.validateMessage()) {
        shouldSubmit = false
        this.messageError = this.formTexts.ERROR_NO_MESSAGE
      }

      if (shouldSubmit) {
        this.submitForm()
      }
    },
    async submitForm() {
      this.formState = this.formStates.SENDING

      const formData = new FormData()
      formData.set('email', this.email)
      formData.set('message', this.message)

      const sendingStatus = await sendContactForm(formData)

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
.contact-form {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.contact-form__message {
  min-height: 110px;
  margin-top: 10px;
}
.contact-form__notification {
  width: 100%;
  margin-bottom: 0;
  font-size: 0.8rem;
}
.contact-form__notification--error{
  color: $color-primary;
}
.contact-form__error-messages {
  width: 100%;
  font-size: 0.8rem;
  margin: 0;
  color: $color-primary;
}
.contact-form__button {
  margin-top: 20px;
  margin-left: auto;
}
</style>
