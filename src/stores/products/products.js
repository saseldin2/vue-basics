import { defineStore } from 'pinia';
import { http } from '@/https';
export const useProductsStore = defineStore('products', {
    state: () => ({
        products:[],
        product:{},
        loading: true,
        error: null,
    }),
    getters: {
        getProducts: (state) => state.products,
        getProduct: (state) => state.product,
        getLoading: (state) => state.loading,
        getError: (state) => state.error,
    },
    actions: {
        async fetchProducts() {
            this.loading = true;
            this.error = null;
            try {
                const response = await http.get('/products?offset=0&limit=10');
                this.products = response.data;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
    },
});
