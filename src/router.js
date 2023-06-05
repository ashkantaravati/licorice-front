import { createRouter, createWebHistory } from "vue-router";

const Wall = () => import("./views/Wall.vue");
const Home = () => import("./views/Home.vue");
const JoinWall = () => import("./views/JoinWall.vue");
const NewWall = () => import("./views/NewWall.vue");
const PutMessage = () => import("./views/PutMessage.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/wall/:id", component: Wall },
  { path: "/new", component: NewWall },
  { path: "/join/:id", component: JoinWall },
  { path: "/put/:id", component: PutMessage },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export {router};