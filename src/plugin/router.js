import { createRouter, createWebHistory } from 'vue-router';
import InfoPage from '../components/InfoPage.vue';
import ExperiencePage from '../components/ExperiencePage.vue';
import Questions from '../components/Questions.vue';
import HomePage from '../components/HomePage.vue';
import Consent from '../components/Consent.vue';
import DonePage from '../components/DonePage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/Information', name: 'Info', component: InfoPage },
  { path: '/Experience', name: 'Experience', component: ExperiencePage },
  { path: '/Questions', name: 'Questions', component: Questions },
  { path: '/Consent', name: 'Consent', component: Consent },
  { path: '/Done', name: 'Done', component: DonePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
