<template class="bg">
  <img v-bind:src="imgUrl" alt="img" />
</template>

<script>
export default {
  data() {
    return {
      imgUrl: "",
    };
  },
  mounted() {
    this.imgUrl = this.$route.params.id;
  },
};
</script>

<style scoped>
body,
html {
  height: 100%;
  margin: 0;
}

.bg {
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.pic {
  width: 100%;
}
</style>