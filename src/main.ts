import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router
import './assets/css/style.css' // font and style

const app = createApp(App);

app.use(router); // Pastikan router diaktifkan
app.mount('#app');
