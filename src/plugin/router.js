import { createRouter, createWebHistory } from 'vue-router';
import InfoPage from '../components/InfoPage.vue';
import ExperiencePage from '../components/ExperiencePage.vue';
import Questions from '../components/Questions.vue';
import HomePage from '../components/HomePage.vue';
import Consent from '../components/Consent.vue';

const routes = [
  { path: '/Information', name: 'Info', component: InfoPage },
  { path: '/Experience', name: 'Experience', component: ExperiencePage },
  { path: '/Questions', name: 'Questions', component: Questions },
  { path: '/Home', name: 'Home', component: HomePage },
  { path: '/Consent', name: 'Consent', component: Consent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
