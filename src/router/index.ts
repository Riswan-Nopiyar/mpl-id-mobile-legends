import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import HomeView from "../views/HomeView.vue";
import Error404 from "../views/errors/Error404.vue";

const routes = [
  {
    path: "/",
    name: "DefaultLayout",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: HomeView,
      },
      {
        path: "/:pathMatch(.*)*", // Menangkap semua rute yang tidak cocok
        name: "Error404",
        component: Error404,
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
