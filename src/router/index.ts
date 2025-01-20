import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import HomePage from "../views/HomePage.vue";
import TeamsEsport from "../views/TeamsEsport.vue";
import PageError404 from "../views/errors/PageError404.vue";

const routes = [
  {
    path: "/",
    name: "DefaultLayout",
    component: DefaultLayout,
    children: [
      {
        path: "/:pathMatch(.*)*", 
        name: "Error404",
        component: PageError404,
      },
      {
        path: "",
        name: "Home",
        component: HomePage,
      },
      {
        path: "/teams",
        name: "Teams",
        component: TeamsEsport,
      },
    ],
  },
  // Rute fallback untuk 404

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
