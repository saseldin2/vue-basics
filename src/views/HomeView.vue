<template>
  <div class="mt-12">
    <users-view :data="users" />
  </div>
</template>

<script >
import UsersView from "@/components/resuable/UsersView.vue";
export default {
  components: { UsersView },
  data() {
    return {
      users: [
        {
          name: "sas",
          style: "bg-red-900 rounded-md m-3",
        },
        {
          name: "sas2",
          style: "bg-green-900 rounded-md m-3",
        },
      ],
    };
  },
};
</script>

<style>
</style>