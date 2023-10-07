<template>
  <div class="app">
    <HeaderComponent />
    <MainMap  />
  </div>
</template>


<script>
import MainMap from "./components/MainMap.vue";
import HeaderComponent from "./components/HeaderFooter/Header.vue"
export default {
  name: 'App',
  components: {
    MainMap,
    HeaderComponent
  }
}
</script>

<style>
body{
  background-image: url('https://hips.hearstapps.com/hmg-prod/images/gettyimages-1442849073-648c673408c0f.jpg'); /* Substitua pelo caminho da sua imagem */
  background-size: cover; /* Ajusta o tamanho da imagem para cobrir todo o elemento */
  background-repeat: no-repeat; /* Impede que a imagem de fundo se repita */
  background-position: center center; /* Centraliza a imagem no elemento */
}
</style>
