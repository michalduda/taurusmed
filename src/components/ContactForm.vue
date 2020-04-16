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
    >
      {{ notification }}
    </p>

    <base-button
      :disabled="formState === formStates.SENDING || formState === formStates.SENT"
      :loading="formState === formStates.SENDING"
      class="contact-form__button aaa"
    >
      Wyślij wiadomość
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="21.904761904761905 21.904761904761905 43.80952380952381 43.80952380952381"
        style="transform: rotate(0deg);"
      >
        <circle
          fill="transparent"
          cx="43.80952380952381"
          cy="43.80952380952381"
          r="20"
          stroke-width="3.8095238095238093"
          stroke-dasharray="125.664"
          stroke-dashoffset="125.66370614359172px"
          class="v-progress-circular__overlay"
        ></circle>
      </svg>
    </base-button>

  </form>
</template>

<script>
import validateEmailPattern from '@/helpers/validateEmail'
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
        MESSAGE_SENDING: 'Wysyłam wiadomość...',
        ERROR_SENDING: 'Wystąpił błąd podczas wysyłania wiadomości',
        ERROR_NO_MESSAGE: 'Wprowadź wiadomość',
        ERROR_INVALID_EMAIL: 'Wprowadź poprawny adres email'
      }
    }
  },
  computed: {
    notification() {
      switch (this.formState) {
        case this.formStates.SENDING:
          return this.formTexts.MESSAGE_SENDING
        case this.formStates.SENT:
          return this.formTexts.MESSAGE_SENT
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
      // this.message = null
      // this.email = null
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
    submitForm() {
      this.formState = this.formStates.SENDING

      setTimeout(() => {
        this.formState = this.formStates.SENT
      }, 500)
      setTimeout(() => {
        this.clearForm()
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

.contact-form__email {
}
.contact-form__message {
  min-height: 100px;
  margin-top: 10px;
}
.contact-form__notification {
  width: 100%;
  margin-bottom: 0;
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
