import basics from './basic'
import categories from './categories'
import PostsRoutes from './posts';
import products from './products'
import commentsRoutes from './comments';
import LoginRoutes from './auth';
    const routes = [
        ...basics,
        ...categories,
        ...products,
        ...PostsRoutes,
        ...commentsRoutes,
        ...LoginRoutes,
        // add note found guard
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('../views/NotFound.vue')
        }
    ]
export default routes;