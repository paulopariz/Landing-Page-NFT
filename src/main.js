import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration: 1000,
});
