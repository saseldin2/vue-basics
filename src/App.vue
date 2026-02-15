<template>
  <div class="min-h-screen bg-gray-200">
    <nav class="bg-white shadow-md">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex justify-center space-x-8 py-4">
          <router-link 
            to="/" 
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md"
            :class="{ 'text-blue-600 bg-blue-50': $route.path === '/' }"
          >
            Home
          </router-link>
          <router-link 
            to="/about" 
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-3 py-2 rounded-md"
            :class="{ 'text-blue-600 bg-blue-50': $route.path === '/about' }"
          >
            About
          </router-link>
        </div>
      </div>
    </nav>
    
    <main class="max-w-4xl mx-auto px-4 py-8">
      <router-view :key="$route.fullPath"/>
    </main>
  </div>
</template>

<style>
/* You can add any custom CSS here if needed */
</style>
