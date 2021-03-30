<template>
  <router-link to="/">
    <img src="@/assets/logo.png" class="logo" alt="logo" />
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  width: 150px;
  height: 50px;
  object-fit: contain;
}
.logo:hover {
  cursor: pointer;
}
</style>