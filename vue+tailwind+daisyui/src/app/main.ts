import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/shared/routes";
import App from "./App.vue";

import "./style.css";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
