// src/main.js
import { createApp } from 'vue';
import { VDateInput } from 'vuetify/labs/VDateInput'
import App from './App.vue';
import vuetify from './plugin/vuetify';
import router from './plugin/router';
import 'vuetify/styles';



const app = createApp(App);
app.use(vuetify);
app.use(router);

app.component('VDateInput', VDateInput);
app.mount('#app');