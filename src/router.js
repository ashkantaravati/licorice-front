import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("./views/Home.vue") },

  {
    path: "/new",
    name: "createWall",
    component: () => import("./views/CreateWall.vue"),
  },
  {
    path: "/wall/:wallId",
    component:()=>import("./views/Wall.vue"),
    children:[
      {
        path: "overview",
        name: "wallOverview",
        component: () => import("./views/WallOverview.vue"),
      },
      {
        path: "join",
        name: "joinWall",
        component: () => import("./views/JoinWall.vue"),
      },
    ]
  },
  {
    path: "/cube/:cubeId",
    component: () => import("./views/Cube.vue"),
    children:[
      {
        path: "inside",
        name: "insideCube",
        component: () => import("./views/CubeInside.vue"),
      },
      {
        path: "put",
        name: "putCard",
        component: () => import("./views/PutCard.vue"),
      },
    ]
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
