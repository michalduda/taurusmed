<template>
  <section class="about">
    <div class="row">
      <div class="col-sm-7 about__visual-wrapper">
        <div class="about__visual"></div>
      </div>
      <div class="col-sm-6 offset-1 about__text-wrapper">
        <h1 class="about__header">Podejmujemy wyzwanie cyfrowej medycyny.</h1>
        <p>Dostarczamy dedykowane systemy informatyczne stworzone z myślą o ludzkiej stronie cyfrowej medycyny. Stawiamy na estetykę i funkcjonalność.</p>
        <p>Nasze produkty są zaprojektowane z dbałością o komfort i łatwość użytkowania: intuicyjne i zintegrowane.</p>
        <p>Łatwe w użyciu dla pacjenta i specjalistów. Pozwalają zdigitalizować usługę zachowując jej indywidualny charakter spotkań.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.about__visual-wrapper {
  background: $color-primary;
  display: flex;
  flex-direction: row-reverse;
  &:before{
    content: '';
    display: block;
    background: white;
    width: 7.143%;
  }
}
.about__visual{
  background: url('~@/assets/about-visual.png');
  mix-blend-mode: screen;
  background-size: cover;
  background-position: right top;
  width: 50%;
}
.about__text-wrapper {
}
.about__header {
  font-size: 28px;
}
</style>
