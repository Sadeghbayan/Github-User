import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:user_name/:repo_name",
    name: "Repository",
    component: () =>
      import(/* webpackChunkName: "repository" */ "../views/Repository.vue"),
  },
  {
    path: "/request-form",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/Search.vue"),
  },
  {
    path: "/github-user",
    name: "User Information",
    component: () =>
      import(/* webpackChunkName: "github-user" */ "../views/Github-user.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
