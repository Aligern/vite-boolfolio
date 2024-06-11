import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import ProjectComponent from './pages/ProjectComponent.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
    // history: createWebHistory(), takes memory of the last visited pages
    history: createWebHistory(),
    routes: [
        // this is the syntax for each route we want to add:
        {
            path: '/', // path is the url of our route
            name: 'home', // name is the name of our route
            component: AppHome, // component is the component we want to render when this route is visited
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectList,
        },
        {
            path: '/projects/:slug', // in this case :slug is a dynamic parameter for the route
            name: 'project-detail',
            component: ProjectComponent,
        },
        // 404 fallback route
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound,
        }
        // {},
    ]
});

export { router };