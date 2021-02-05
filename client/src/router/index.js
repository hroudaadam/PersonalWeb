import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Posts from "../views/Posts";
import PostDetail from "../views/PostDetail";
import PostCreate from "../views/PostCreate";
import Login from "../views/Login";
import NotFound from "../views/NotFound";

Vue.use(VueRouter);

  const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts
  },
  {
    path: "/posts/create",
    name: "PostCreate",
    component: PostCreate
  },
  {
    path: "/posts/:postId",
    name: "PostDetail",
    component: PostDetail,
    props: true
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/not-found",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "*",
    redirect: {name: "NotFound"}
  }
];

const router = new VueRouter({
  routes
});

export default router;
