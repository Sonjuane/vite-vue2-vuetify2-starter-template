import Vue from 'vue';
import VueRouter from 'vue-router';
import Base from '@/views/Layout/Base.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: Base,
    meta: { requiresAuth: true },
    children: [
      // {
      //   path: '/home',
      //   name: 'Home',
      //   component: () => import('@/views/Home.vue'),
      // },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'),
      },
      {
        path: '/',
        name: 'EmailSignature',
        component: () => import('@/views/EmailSignature.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.Base,
  routes,
});

export default router;
