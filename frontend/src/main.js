import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

let token = localStorage.getItem('token');
if(token){
 axios.defaults.headers = { Authorization: token };
}


const app = createApp(App)

app.use(router)

app.mount('#app')