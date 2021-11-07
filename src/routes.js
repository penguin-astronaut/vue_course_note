import { createRouter, createWebHistory } from "vue-router";
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import NotFound from './pages/404';

const history = createWebHistory();

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/:CatchAll(.*?)',
      name: '404',
      component: NotFound
    }
  ]
})

export default router;