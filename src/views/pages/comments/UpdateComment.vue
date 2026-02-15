<template>
  <div>
    THIS The update comments page {{ $route.params.id }}

  </div>
</template>

<script >
export default {
    created(){
        // check if the routes needs auth form the meta 
        console.log(this.$route.meta)

    }
}

</script>

<style>

</style>