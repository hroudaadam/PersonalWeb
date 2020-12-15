import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Login from '../views/Login';
import About from '../views/About';
import Posts from '../views/Posts';
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
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
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
