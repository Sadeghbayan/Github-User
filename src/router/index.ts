import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { store } from "@/store/store";
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

    // Avoid users trying to reach page without having entered data
    beforeEnter(to, from, next) {
      const { state } = store;
      if (state.githubUsername === "") {
        next("/request-form");
        return;
      }
      next();
    },
  },
  {
    path: "/:catchAll(.*)",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
