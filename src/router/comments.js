import CommentsView from "@/views/pages/comments/CommentsView.vue";
import CreateComment from "@/views/pages/comments/CreateComment.vue";
import ShowComments from "@/views/pages/comments/ShowComments.vue";
import UpdateComment from "@/views/pages/comments/UpdateComment.vue";

const commentsRoutes =[
    {
        path:'/comments',
        name:"comments",
        component:CommentsView,
       meta: {
        requiresAuth: true,
        title: "Comments",
        }
    },
    {
        path:'/comments/update/:id',
        name:"comments.update",
        component:UpdateComment,
        meta: {
        requiresAuth: true,
        title: "Comments",

        }
    },
    {
        path: "/comments/show/:id",
        name: "comments.show",
        component: ShowComments,
        meta: {
        requiresAuth: true,
        }
    
    },
    {
        path:"/comments/create",
        name:"comments.create",
        component:CreateComment,
        meta: {
        requiresAuth: true,
        }
    }

]

export default commentsRoutes;