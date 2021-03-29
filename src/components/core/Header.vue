<template>
  <header class="header">
    <Logo />
    <div v-if="!isLogged">
      <button>
        <p>Sign-Up</p>
      </button>
      <button>
        <p>Login</p>
      </button>
    </div>
    <div v-if="isLogged">
      <button>
        <p>Upload</p>
      </button>
      <button>
        <p>Profile</p>
      </button>
      <button>
        <p>Search</p>
      </button>
      <button type="button">
        <p>Sign-Out</p>
      </button>
    </div>
  </header>
</template>

<script>
import Logo from "./Logo";
export default {
  name: "Header",
  components: {
    Logo,
  },
  data(){
    return {
      isLogged:false
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #ffffff;
  border-bottom: #eeeeee 1px solid;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
}
button p {
  color: white;
  font-family: cursive;
}
button {
  background-color: #fa8a72;
  border-radius: 25px;
  border: none;
  padding: 0px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-color: #fa8a72 !important;
}
</style>