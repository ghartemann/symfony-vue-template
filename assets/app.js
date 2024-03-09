import './styles/app.scss';

import { createApp } from 'vue';
import App from '@pages/App.vue';

import axios from 'axios';
import VueAxios from 'vue-axios';

import router from "@/js/router";

import '@mdi/font/css/materialdesignicons.css';

import {createPinia} from "pinia";

const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .use(VueAxios, axios)
    .mount('#app');
