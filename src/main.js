// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugin/vuetify';
import 'vuetify/styles';



const app = createApp(App);
app.use(vuetify);
app.mount('#app');