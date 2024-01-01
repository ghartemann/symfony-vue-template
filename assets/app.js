// any CSS you import will output into a single css file (app.scss in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';

import { createApp } from 'vue';
import App from '@pages/App.vue';

import axios from 'axios';
import VueAxios from 'vue-axios';

import router from "./js/router";

import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css';

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

createApp(App)
    .use(router)
    .use(vuetify)
    .use(VueAxios, axios)
    .mount('#app');
