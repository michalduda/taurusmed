<template>
  <aside class="contact-form">
    <textarea name id class="contact-form__input"></textarea>
    <p class="contact-form__messages">some error message</p>
    <button class="contact-form__button">Wyślij wiadomość</button>
  </aside>
</template>

<script>
export default {}
</script>

<style lang="scss">
.contact-form {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.contact-form__input {
  width: 100%;
  background-color: $color-gray;
  border: none;
  min-height: 150px;
  resize: none;
  padding: 10px;
  &:focus {
    outline: none;
  }
}
.contact-form__messages {
  width: 100%;
  font-size: 0.8rem;
  margin: 0;
}

.contact-form__button{
  margin-top: 20px;
  margin-left: auto;
}
</style>
