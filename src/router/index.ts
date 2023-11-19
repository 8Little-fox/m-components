import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Layout from '../components/container/src/index.vue';
import Home from '../views/home/Home.vue';
import ChooseIcon from  '../views/chooseIcon/index.vue';
const routes: RouteRecordRaw[] = [] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/chooseIcon',
        component: ChooseIcon
      }
    ]
  }
];
const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router;