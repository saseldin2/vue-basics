<template>
  <div class="container mx-auto">
<!--     @todo: change this display into table instead of raw data the table has actions for delete -view-edit abobe the table add new product button. -->
    <h1 class="text-2xl font-bold mb-4">Products</h1>
      <!-- button for creating new product -->
      <button class="mb-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Add New Product</button>

       <!-- table for displaying products -->
    <div v-if="getLoading" class="text-center py-4">
      <span class="text-gray-500">Loading products...</span>
    </div>
    <div v-if="getError" class="text-center py-4 text-red-500">
      {{ getError }}
    </div>
    

<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="bg-neutral-secondary-soft border-b border-default">
            <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                    Product title
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    slug
                </th>
                <th scope="col" class="px-6 py-3 font-medium">
                    Category
                </th>
                
                <th scope="col" class="px-6 py-3 font-medium">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default" v-for="product in getProducts" :key="product.id">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                    {{ product.title }}
                </th>
                <td class="px-6 py-4">
                    {{ product.slug }}
                </td>
                <td class="px-6 py-4">
                    {{ product.category.name }}
                </td>
               
                <td class="px-6 py-4">
                   <!-- Buttons for delete, view, edit -->
                    <button @click="$router.push(`/products/${product.id}`)" class="text-sm px-3 py-1.5 rounded-md text-white bg-yellow-600 text-fg-brand hover:underline mr-2">View</button>
                    <button @click="$router.push(`/products/${product.id}/edit`)" class="text-sm px-3 py-1.5 rounded-md text-white bg-blue-600 text-fg-brand hover:underline mr-2">Edit</button>
                    <button @click="deleteProduct(product.id)" class="text-sm px-3 py-1.5 rounded-md text-white bg-red-600 text-fg-brand hover:underline">Delete</button>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

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
    ...mapActions(useProductsStore, ['fetchProducts', 'deleteProduct']),
  },
  async created() {
   await this.fetchProducts();
  }
}
</script>

<style>

</style>