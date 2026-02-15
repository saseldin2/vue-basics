import { defineStore } from 'pinia';
import { http } from '@/https';
export const usePostsStore = defineStore('posts', {
    state: () => ({
        posts: [],
        post: {},
        loading: true,
        error: null,
    }), 
    getters: {
        getPosts: (state) => state.posts,
        getPost: (state) => state.post,
        getLoading: (state) => state.loading,
        getError: (state) => state.error,
    },
    actions: {
        async fetchPosts() {
            this.loading = true;
            this.error = null;
            try {
                const response = await http.get('/posts');
                this.posts = response.data;
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
    },
});
