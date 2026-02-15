<template>
  <div>
        <ul class="p-4">    
            <li v-for="(d,index) in data" :key="index" :class="d.style" class="text-white p-3" >{{  d.name }}</li>
        </ul>
  </div>
</template>

<script >
export default {
    props:['data']
}
</script>

<style>

</style>