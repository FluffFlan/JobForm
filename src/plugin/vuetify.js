// src/plugins/vuetify.js
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Import the icon set (e.g., Material Design Icons)
import '@mdi/font/css/materialdesignicons.css'; 

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // Set default to Material Design Icons
    sets: {
      mdi: {
        iconfont: 'mdi', // Define the Material Design Icons set
      },
    },
  },
});