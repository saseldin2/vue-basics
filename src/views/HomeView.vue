<template>
  <div>
    <users-view :data="users"  />
     <!-- <users-view :data="fruits"  :style="fruitsStyle"/>
      <users-view :data="skills" :style="skillsStyle"/> -->

     
  </div>
</template>

<script >
import UsersView from '@/components/resuable/UsersView.vue';
export default {
  components: { UsersView },
  data() {
    return {
      users: [
        {
          name:"sas",
          style:"bg-red-900 rounded-md m-3"
        },
        {
          name:"sas2",
          style:"bg-green-900 rounded-md m-3"
        }
      ]
      // fruits:['Orange','Apple','Banana'],
      // skills:['HTML','CSS','JS','PHP'],
      // usersStyle:"bg-red-900 rounded-md m-3",
      // fruitsStyle:"bg-green-900 rounded-md m-3",
      // skillsStyle:"bg-blue-900 rounded-md m-3",
    };
  },
};
</script>

<style>
</style>