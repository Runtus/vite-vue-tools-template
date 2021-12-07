import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router';

// 注意，vite已经不默认忽略.vue后缀名
const HelloWorld = () => import('@/components/HelloWorld.vue');
const About = () => import('@/components/About.vue');

const routes: RouteRecordRaw[] = [
    { path: '/', component: HelloWorld },
    { path: '/about', component: About },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
