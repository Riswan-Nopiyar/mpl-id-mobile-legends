import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Home from "../views/Home.vue";
import Teams from "../views/Teams.vue";
import Error404 from "../views/errors/Error404.vue";

const routes = [
  {
    path: "/",
    name: "DefaultLayout",
    component: DefaultLayout,
    children: [
      {
        path: "/:pathMatch(.*)*", 
        name: "Error404",
        component: Error404,
      },
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/teams",
        name: "Teams",
        component: Teams,
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
