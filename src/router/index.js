import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/core/Home.vue'
import Login from '../components/core/Login.vue'
import Register from '../components/core/Register.vue'
import ErrorPage from '../components/core/ErrorPage.vue'
import Profile from '../components/core/Profile.vue'
import UploadPage from '../components/core/UploadPage.vue'
import Search from '../components/core/Search.vue'

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
        path: "/upload",
        name: "Upload",
        component: UploadPage,
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
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
        alert("You can't access login page because you are logged in!")
    }
    if (to.path === '/register' && user !== 'null') {
        next('/');
        alert("You can't access register page because you are logged in!")
    }
    if (to.path === '/profile' && user === 'null') {
        next('/');
        alert("You can't access profile page because you are not logged in. Please login or register!")
    }
    if (to.path === '/upload' && user === 'null') {
        next('/');
        alert("You can't access upload page because you are not logged in. Please login or register!")
    }
    else {
        next();
    }
})

export default router;