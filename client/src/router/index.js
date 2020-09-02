import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Login from '../views/Login';
import Diary from '../views/Diary';
import Travel from '../views/Travel';
import PostDetail from '../views/PostDetail';
import PostCreate from '../views/PostCreate';

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/diary',
    name: 'Diary',
    component: Diary
  },
  {
    path: '/travel',
    name: 'Travel',
    component: Travel
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetail,
    props: true
  },
  {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreate
  }
];

const router = new VueRouter({
  routes
});

export default router;
