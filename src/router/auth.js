import LoginView from "@/views/pages/auth/LoginView.vue";

const LoginRoutes = [
    {
        path: '/login',
        name: "login",
        component: LoginView,
        meta: {
            layout: 'auth',
            auth: true
        },

    }
]

export default LoginRoutes;