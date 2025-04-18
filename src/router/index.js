import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/SignupPage.vue')
  },
  {
    path: '/polls',
    name: 'PollList',
    component: () => import('../views/PollListPage.vue') 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
