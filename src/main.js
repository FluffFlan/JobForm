// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugin/vuetify';
import 'vuetify/styles';
import vueCountryRegionSelect from './plugin/vueCountryRegionSelect';


const app = createApp(App);
app.use(vuetify);
app.use(vueCountryRegionSelect);
app.mount('#app');