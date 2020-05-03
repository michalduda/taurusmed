<template>
  <div class="solutions-texts">
    <h2 class="solutions-texts__header">
      Rozwiązania indywidualne
    </h2>
    <p class="solutions-texts__text bold">
      Tworzymy indywidualne, dedykowane opiece medycznej systemy, umożliwiające zdigitalizowanie działalności oraz usprawnienie lub automatyzację procesów:
    </p>
    <ul class="solutions-texts__list">
      <li>
        Projektujemy serwisy, sklepy internetowe i sklepy z badaniami
      </li>
      <li>
        Tworzymy aplikacje web, iOS, android i systemy telemedyczne
      </li>
      <li>
        Prowadzimy bazy danych, zdalne zlecanie badań
      </li>
      <li>
        Wdrażamy cyfrową archiwizację wizyt, realizację płatności i systemy rezerwacji
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.solutions-texts{
  margin-bottom: 50px;
  @include lg{
    padding-right: 20%;
  }
}
.solutions-texts__header {
  width: 80%;
  margin-bottom: 50px;
  margin-top: 50px;

  @include sm{
    margin-top: 0.83em;
  }
}
.solutions-texts__text{
  margin-bottom: 25px;
}
.solutions-texts__list{
  padding-left: 20px;
  li {
    margin-bottom: 5px;
  }
}
</style>
