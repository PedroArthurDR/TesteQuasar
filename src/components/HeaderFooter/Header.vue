<template>
  <div class="header">

      <h1 @click="redirectToExternalLink" >QUASAR</h1>

  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  methods: {
    redirectToExternalLink() {
      window.open("https://quasarspace.com.br", "_blank");
    },
  },
}
</script>

<style scoped>
.header {
  background-color: black;
  color: white;
  font-family: "Courier New", Courier, monospace;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 6vh;
  transition: color 1s ease; 
  cursor: pointer;
}


h1:hover {
  color: #0074d9;
}
</style>
