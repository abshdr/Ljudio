import { createRouter, createWebHashHistory } from "vue-router";
import Songs from "../views/Songs"
import Albums from "../views/Albums"
import Artists from "../views/Artists"
import ArtistProfile from "../views/ArtistProfile"






const routes = [
  {
    path: "/songs",
    name: "Songs",
    component: Songs,
  },
  {
    path: "/songs/:id?",
    name: "Songs",
    component: Songs,
  },
  {
    path: "/albums",
    name: "Albums",
    component: Albums,
  },
  {
    path: "/albums/:name?",
    name: "Albums",
    component: Albums,
  },
  {
    path: "/artists",
    name: "Artists",
    component: Artists,
  },
  {
    path: "/artistProfile",
    name: "ArtistProfile",
    component: ArtistProfile,
  },
  {
    path: "/artistProfile/:id?",
    name: "ArtistProfile",
    component: ArtistProfile,
  }
  
   

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
