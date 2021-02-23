import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import NotFound from "../views/NotFound";

Vue.use(VueRouter);

  const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
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
