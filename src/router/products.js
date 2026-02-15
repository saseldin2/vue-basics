import ProductsView from "@/views/pages/products/ProductsView.vue";

const ProductsRoutes = [
    {
        path: '/products',
        name: "products",
        component: ProductsView,
        meta: {
            layout: 'default',
            auth: true
        },

    }
]

export default ProductsRoutes;