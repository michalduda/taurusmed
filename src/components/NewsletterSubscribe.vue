<template>
  <div class="newsletter-subscribe">
    <div class="text-input__wrapper">
      <input class="text-input" type="text" name id placeholder="zapisz sie do newslettera"/>
      <button class="text-input__button">&gt;</button>
    </div>
    <p class="text-input__messages">some error message</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.text-input__wrapper{
  display: flex;
}
.text-input__button{
  background: $color-primary;
  color: #fff;
  width: 30px;
  height: 30px;
  padding: 0;
  &:focus {
    outline: none;
  }
}
.text-input {
  background: $color-gray;
  border: none;
  padding: 5px;
  border-radius: 0;
  width: calc(100% - 30px);
  &:focus {
    outline: none;
  }
}
.text-input__messages {
  width: 100%;
  font-size: 0.8rem;
  margin: 0;
}
</style>
