import { createApp } from 'vue';
import App from './App.vue';

require('./bootstrap');

const app = createApp(App)
app.mount("#app-vue")
