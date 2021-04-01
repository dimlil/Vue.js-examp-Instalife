import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/core/Home.vue'
import Login from '../components/core/Login.vue'
import Register from '../components/core/Register.vue'
import ErrorPage from '../components/core/ErrorPage.vue'
import Profile from '../components/core/Profile.vue'

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
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "Error",
        component: ErrorPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const user = localStorage.getItem('user');
    console.log(user);
    if (to.path === '/login' && user !== 'null') {
        next('/');
        alert("You can't access login page becouse you are logged in")
    }
    if (to.path === '/register' && user !== 'null') {
        next('/');
        alert("You can't access register page becouse you are logged in")
    }
    else {
        next();
    }
})

export default router;