<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Posts</h1>

    <div v-if="getLoading" class="text-center py-4">
      <span class="text-gray-500">Loading posts...</span>
    </div>

    <div v-if="getError" class="text-center py-4 text-red-500">
      {{ getError }}
    </div>

    <ul v-if="getPosts.length" class="space-y-4">
      <li v-for="post in getPosts" :key="post.id" class="p-4 border rounded shadow-sm">
        <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </li>
    </ul>

    <div v-if="!getLoading && !getPosts.length && !getError" class="text-center py-4 text-gray-500">
      No posts available.
    </div>
  </div>
</template>

<script>
import { usePostsStore } from '@/stores/posts/posts';
import { mapActions, mapState } from 'pinia';

export default {
  name: 'PostsView',
  data() {
    return {
      // Your data properties here
    }
  },
  computed: {
    // Your computed properties here
    ...mapState(usePostsStore, ['getPosts', 'getLoading', 'getError']),
  },

  methods: {
    // Your methods here
    ...mapActions(usePostsStore, ['fetchPosts']),
  },
  async created() {
   await this.fetchPosts();
}
}
</script>

<style>

</style>