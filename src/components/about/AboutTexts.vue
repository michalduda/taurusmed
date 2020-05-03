<template>
  <div class="about-texts">
    <h2 class="about-texts__header">
      Podejmujemy wyzwanie cyfrowej medycyny.
    </h2>
    <p
      class="about-texts__text bold"
    >
      Dostarczamy dedykowane systemy informatyczne stworzone z myślą o ludzkiej stronie cyfrowej medycyny. Stawiamy na estetykę i funkcjonalność.
    </p>
    <p
      class="about-texts__text"
    >
      Nasze produkty są zaprojektowane z dbałością o komfort i łatwość użytkowania: intuicyjne i zintegrowane.
    </p>
    <p
      class="about-texts__text"
    >
      Łatwe w użyciu dla pacjenta i specjalistów. Pozwalają zdigitalizować usługę zachowując jej indywidualny charakter spotkań.
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.about-texts{
  margin-bottom: 50px;
}
.about-texts__header {
  width: 80%;
  margin-bottom: 50px;
  margin-top: 50px;
  @include sm{
    margin-top: 0.83em
  }
}
.about-texts__text{
  margin-bottom: 25px;
}
</style>
