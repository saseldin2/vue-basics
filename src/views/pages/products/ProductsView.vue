<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold mb-4">Products</h1>
    <div v-if="getLoading" class="text-center py-4">
      <span class="text-gray-500">Loading products...</span>
    </div>
    <div v-if="getError" class="text-center py-4 text-red-500">
      {{ getError }}
    </div>
    <ul v-if="getProducts.length" class="space-y-4">
      <li v-for="product in getProducts" :key="product.id" class="p-4 border rounded shadow-sm">
        <h2 class="text-xl font-semibold mb-2">{{ product.title }}</h2>
        <p>{{ product.description }}</p>
      </li>
    </ul>
    <div v-if="!getLoading && !getProducts.length && !getError" class="text-center py-4 text-gray-500">
      No products available.
    </div>
   
  </div>
</template>

<script >
import { mapActions, mapState } from 'pinia';
import { useProductsStore } from '@/stores/products/products';

export default {
  name: 'ProductsView',
  data() {
    return {
      // Your data properties here
    }
  },
  computed: {
    // Your computed properties here
    ...mapState(useProductsStore, ['getProducts', 'getLoading', 'getError']),
  },

  methods: {
    // Your methods here
    ...mapActions(useProductsStore, ['fetchProducts']),
  },
  async created() {
   await this.fetchProducts();
  }
}
</script>

<style>

</style>