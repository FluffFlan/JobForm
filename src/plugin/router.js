import { createRouter, createWebHistory } from 'vue-router';
import InfoPage from '../components/InfoPage.vue';
import ExperiencePage from '../components/ExperiencePage.vue';

const routes = [
  { path: '/Information', name: 'Info', component: InfoPage },
  { path: '/Experience', name: 'Experience', component: ExperiencePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
