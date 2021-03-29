<template>
  <header class="header">
    <Logo />
    <div v-if="!isLogged">
      <button>
        <p>Sign-Up</p>
      </button>
      <button @click="logIn">
        <p>Login</p>
      </button>
    </div>
    <div v-else-if="isLogged">
      <button>
        <p>Upload</p>
      </button>
      <button>
        <p>Profile</p>
      </button>
      <button>
        <p>Search</p>
      </button>
      <button @click="logOut">
        <p>Sign-Out</p>
      </button>
    </div>
    <!-- {{ isLogged }} -->
  </header>
</template>

<script>
import Logo from "./Logo";
export default {
  name: "Header",
  components: {
    Logo,
  },
  data() {
    return {
      isLogged: false,
    };
  },
  methods: {
    logOut() {
      localStorage.setItem("isLog", false);
      this.isLogged = false;
    },
    logIn() {
      localStorage.setItem("isLog", true);
      this.isLogged = true;
    },
  },
  computed: {
    isLoggedUser: function () {
      console.log(localStorage.getItem("isLog"));
      return localStorage.getItem("isLog");
    },
  },
  watch: {},
  beforeMount: function () {
    if (localStorage.getItem("isLog") == "false") {
      this.isLogged = false;
    }
    if (localStorage.getItem("isLog") == "true") {
      this.isLogged = true;
    }
  },
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