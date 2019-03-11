import Vue from "vue";
import Router from "vue-router";
import Queue from "./components/Queue.vue";
import Completed from "./components/Completed.vue";
import Search from "./components/Search.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Queue",
            component: Queue
        },
        {
            path: "/completed",
            name: "Completed",
            component: Completed
        },
        {
            path: "/search",
            name: "Search",
            component: Search
        }
    ]
});
