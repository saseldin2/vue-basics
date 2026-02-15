import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

// check user Auth for the incoming routes

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if(to.meta.requiresAuth && localStorage.getItem('token') === null || localStorage.getItem('token') === undefined){
  return  next('/login')
  }

  next()
})
export default router
