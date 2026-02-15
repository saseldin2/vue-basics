import basics from './basic'
import categories from './categories'
import PostsRoutes from './posts';
import products from './products'
import commentsRoutes from './comments';
    const routes = [
        ...basics,
        ...categories,
        ...products,
        ...PostsRoutes,
        ...commentsRoutes
    ]
export default routes;