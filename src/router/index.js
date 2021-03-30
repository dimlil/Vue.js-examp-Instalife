import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/core/Home.vue'
import Login from '../components/core/Login.vue'

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
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;