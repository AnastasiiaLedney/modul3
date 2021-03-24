import {createRouter, createWebHistory} from "vue-router";

import About from "./components/About";
import Photos from "./components/Photos.vue";
import fetch from "./components/fetch.vue";
import PhotoDetaild from "./components/PhotoDetaild.vue";
import PhotoTemplate from "./components/PhotoTemplate.vue";



const Router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            component: Photos
        },
        {
            path:"/about",
            component: About
        },
        {
            path:"/fetch",
            component: fetch
        },
        {
            path:"/PhotoDetaild",
            component: PhotoDetaild
        },
        {
            path:"/PhotoTemplate",
            component: PhotoTemplate
        },
        
       
    ]
});

export default Router;