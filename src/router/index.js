import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/core/Home.vue'
import Login from '../components/core/Login.vue'
import Register from '../components/core/Register.vue'

const routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;