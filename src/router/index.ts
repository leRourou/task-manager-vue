import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TaskListView from "../views/TaskListView.vue";

const routes = [
    { path: "/", component: HomeView },
    { path: "/taches", component: TaskListView },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
