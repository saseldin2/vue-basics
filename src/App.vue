<template>
  <div>
    <!-- navbar -->
      <component :is="isLayout">

      </component>
      <!-- content -->

      <!-- footer -->
  </div>
</template>

<script >

import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import AuthLayout from '@/components/layouts/AuthLayout.vue'

export default {
data(){
  return{
  }
},
computed:{
  isLayout(){
    console.log(this.$route.meta.layout)
    return this.$route.meta.layout === 'auth' ? AuthLayout : DefaultLayout;
  }
}

}

</script>

<style>

</style>