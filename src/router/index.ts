import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import PageError404 from "../views/errors/PageError404.vue";
import HomePage from "../views/HomePage.vue";
import EsportTeams from "../views/EsportTeams.vue";
import PlayerTransfer from "../views/PlayerTransfer.vue";
import NewsPage from "../views/NewsPage.vue";

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
        component: EsportTeams,
      },
      {
        path: "/transfer",
        name: "Transfer",
        component: PlayerTransfer,
      },
      {
        path: "/news",
        name: "News",
        component: NewsPage,
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
