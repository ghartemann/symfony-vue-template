import './styles/app.scss';

import { createApp } from 'vue';
import App from '@pages/App.vue';

import axios from 'axios';
import VueAxios from 'vue-axios';

import router from "@/js/router";

import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import '@mdi/font/css/materialdesignicons.css';

import {createPinia} from "pinia";

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
});

const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .use(vuetify)
    .use(VueAxios, axios)
    .mount('#app');
