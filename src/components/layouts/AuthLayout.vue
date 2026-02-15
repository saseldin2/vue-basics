<template>
  <div class="min-h-screen bg-neutral-secondary flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <router-view :key="$route.fullPath"/>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>