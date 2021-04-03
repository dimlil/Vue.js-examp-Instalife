<template>
  <div class="errors">
    <div v-for="(error, index) of v$.$errors" :key="index" class="error">
      <!-- <strong>{{ error.$validator }}</strong>
      <small> on property </small> -->
      <strong>{{ error.$property }}</strong>
      <small> field says: </small>
      <strong>{{ error.$message }}</strong>
    </div>
  </div>
  <form class="form" @submit.prevent="login">
    <div>
      <h1 class="login">Login</h1>
    </div>

    <div>
      <input
        type="email"
        id="inputUsername"
        name="email"
        placeholder="Email"
        v-model="email"
        @blur="v$.email.$touch"
      />
      <label htmlFor="inputUsername">Email</label>
    </div>

    <div>
      <input
        type="password"
        id="inputPassword"
        name="password"
        placeholder="Password"
        v-model="password"
        @blur="v$.password.$touch"
      />
      <label htmlFor="inputPassword">Password</label>
    </div>

    <button class="btn" type="submit">Sign In</button>

    <div>
      <p class="text">
        Don't have account? Then just
        <router-link to="/register">Sign Up</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { auth } from "../../firebase.js";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.v$.$touch();
      if (this.v$.$error) return;
      auth.signInWithEmailAndPassword(this.email, this.password)
      .then(()=>{
        localStorage.setItem('isLog', 'true');
        localStorage.setItem("user", JSON.stringify(auth.currentUser))
      })
      .then(()=>{
        this.$router.push("/")
      })
        .catch((error) => {
          this.$router.push({
            pathname: "/sign-up",
          });
          alert(error.message);
        });
    },
  },
  validations() {
    return {
      email: { required, email },
      password: { required },
    };
  },
};
</script>

<style scoped>
p,
h1,
label {
  font-family: cursive;
}

.btn-center {
  width: 100%;
  margin-left: 38%;
}

.text {
  width: 50%;
  margin: auto;
  object-fit: contain;
  display: block;
}

input {
  width: 50%;
  margin: auto;
  object-fit: contain;
  display: block;
}

h1 {
  margin-left: 41%;
  margin-bottom: 20px;
}

.login {
  margin-left: 43%;
}

.form {
  background-color: rgba(255, 255, 255, 0.479);
  padding: 2%;
  width: 80%;
  margin: 0 auto;
  margin-top: 40px !important;
  border: solid;
  border-radius: 1rem;
  border-color: #fa8a72;
  box-shadow: 0 0 1.5rem 0 rgba(0, 0, 0, 0.712);

  max-width: 700px;
  margin: auto;
}

input.form-control {
  width: 50% !important;
  margin-left: 24.5% !important;
}

textarea.form-control {
  width: 50%;
  margin: 0 auto;
  resize: none;
  height: 20vh;
}

form label {
  display: block;
  margin: 0 auto;
  width: 50%;
  text-align: center;
  margin-bottom: 2%;
}

.btn {
  background-color: #fa8a72;
  color: white !important;
  border-color: #fa8a72 !important;
  border-radius: 10px;
  width: 15%;
  margin: auto;
  object-fit: contain;
  display: block;
}
.errors {
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #ff6241;
}
.error {
  margin: auto;
  width: 50%;
  padding-top: 1%;
  padding-bottom: 1%;
  border: 0px;
  border-bottom: 2px;
  border-style: solid;
  border-color: black;
}
</style>