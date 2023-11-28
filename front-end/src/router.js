import { createRouter, createWebHistory } from 'vue-router';
 
// import NotFound from './pages/NotFound.vue';
 
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./pages/AppHome.vue')
        },
        {
            path: '/posts',
            name: 'postsList',
            component: () => import('./pages/AppPostsList.vue')
        },
        {
            path: '/post/:slug',
            name: 'post',
            component: () => import('./pages/AppPost.vue'),
        },
        {
            path: '/create',
            name: 'newPost',
            component: () => import('./pages/AppNewPost.vue')
        },
    ]
});
 
export { router };