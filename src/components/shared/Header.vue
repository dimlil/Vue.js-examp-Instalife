<template>
  <header class="header" v-if="show">
    <Logo />
    <div v-if="!isLogged">
      <router-link to="/register">
        <button>
          <p>Sign-Up</p>
        </button>
      </router-link>
      <router-link to="/login">
        <button @click="logIn">
          <p>Login</p>
        </button>
      </router-link>
    </div>
    <div v-else-if="isLogged">
      <button>
        <p>Upload</p>
      </button>
      <router-link to="/profile">
        <button>
          <p>Profile</p>
        </button>
      </router-link>
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
import Logo from "../core/Logo.vue";
export default {
  name: "Header",
  components: {
    Logo,
  },
  data() {
    return {
      isLogged: false,
      currentLocation: location.pathname,
      show: true,
    };
  },
  methods: {
    logOut() {
      localStorage.setItem("isLog", false);
      localStorage.setItem("user", null);
      this.isLogged = false;
      this.$router.push("/")
    },
    // logIn() {
    //   localStorage.setItem("isLog", true);
    //   this.isLogged = true;
    // },
    toggleHeader() {
      if (
        this.currentLocation == "/login" ||
        this.currentLocation == "/register"
      ) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    checkIsUserLoged() {
      if (localStorage.getItem("user") == "null") {
        this.isLogged = false;
      }
      if (localStorage.getItem("user") !== "null") {
        this.isLogged = true;
      }
    },
  },
  computed: {
    isLoggedUser: function () {
      console.log(localStorage.getItem("isLog"));
      return localStorage.getItem("isLog");
    },
  },
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
      this.currentLocation = to.href;
      this.toggleHeader();
      this.checkIsUserLoged();
    },
  },
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