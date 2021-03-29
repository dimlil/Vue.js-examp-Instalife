<template>
  <Header />
</template>

<script>
import Header from "./components/core/Header.vue"
export default {
  name: "App",
  components: {
    Header
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body{
    margin: 0;
}
button,app-logo{
    outline-color: transparent;
}
</style>
