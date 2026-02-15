import PostsView from "@/views/pages/posts/PostsView.vue";
 
const PostsRoutes =[
    {
        path:'/posts',
        name:"posts",
        component:PostsView,
         meta: {
      layout: 'default',
      auth: true
    },
    
    }
]

export default PostsRoutes;