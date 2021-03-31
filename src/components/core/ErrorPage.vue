<template>
  <div>
    <h1 class="err">
      ERROR 404! <br />
      Page not found
    </h1>
    <p class="errText">
      If you want to go to Home Page <router-link to="/" style='display: inline-block;'><p>click here</p></router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.err {
  font-family: cursive;
  color: #fa8a72;
  margin-left: 38.5%;
}
.errText {
  margin-left: 37%;
}

</style>