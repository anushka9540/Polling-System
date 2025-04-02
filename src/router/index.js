import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/LoginPage.vue') // Lazy-loaded
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/SignupPage.vue') // Lazy-loaded
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
