import CategoriesView from "@/views/pages/categories/CategoriesView.vue";

const CategoriesRoutes = [
    {
        path: '/categories',
        name: "categories",
        component: CategoriesView,
        meta: {
            layout: 'default',
            auth: true
        },

    }
]

export default CategoriesRoutes;