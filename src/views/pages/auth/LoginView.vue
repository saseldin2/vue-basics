<template>
  <div class="bg-white px-6 py-8 shadow-lg border border-default rounded-base">
    <div class="text-center mb-8">
      <img src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite" class="h-10 mx-auto mb-4" />
      <h2 class="text-2xl font-bold text-heading">Welcome back</h2>
      <p class="text-body mt-2">Please sign in to your account</p>
    </div>

    <form @submit.prevent="handleLogin" class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium text-heading mb-2">
          Email address
        </label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-3 py-2.5 border border-default rounded-base text-heading bg-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-heading mb-2">
          Password
        </label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          required
          class="w-full px-3 py-2.5 border border-default rounded-base text-heading bg-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
          placeholder="Enter your password"
        />
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input
            id="remember"
            v-model="form.remember"
            type="checkbox"
            class="h-4 w-4 text-brand focus:ring-brand border-default rounded"
          />
          <label for="remember" class="ml-2 block text-sm text-body">
            Remember me
          </label>
        </div>
        
        <a href="#" class="text-sm text-fg-brand hover:underline">
          Forgot your password?
        </a>
      </div>

      <button
        type="submit"
        :disabled="isLoading"
        class="w-full bg-brand hover:bg-brand-secondary disabled:opacity-50 text-white font-medium py-2.5 px-4 rounded-base focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 transition-colors"
      >
        <span v-if="!isLoading">Sign in</span>
        <span v-else class="flex items-center justify-center">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Signing in...
        </span>
      </button>
    </form>

    <div class="mt-6 text-center">
      <p class="text-sm text-body">
        Don't have an account? 
        <router-link to="/register" class="text-fg-brand hover:underline font-medium">
          Sign up
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      isLoading: false,
      form: {
        email: '',
        password: '',
        remember: false
      }
    }
  },
  methods: {
    async handleLogin() {
      this.isLoading = true
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // For demo purposes, accept any email/password
        if (this.form.email && this.form.password) {
          // Redirect to dashboard or home
          this.$router.push('/')
        } else {
          alert('Please fill in all fields')
        }
      } catch (error) {
        console.error('Login failed:', error)
        alert('Login failed. Please try again.')
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style>

</style>