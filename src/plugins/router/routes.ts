import { RouteRecordRaw } from "vue-router";
import HomePage from "@/pages/home/index.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: () => import(`@/pages/AboutPage.vue`),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import(`@/pages/ContactPage.vue`),
  },
];
