import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

// router.ts
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";

const routes = [
    { path: "/", component: HomeView },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
