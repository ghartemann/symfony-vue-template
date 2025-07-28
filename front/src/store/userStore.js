import axios from 'axios';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useUserStore = defineStore('user', () => {
    const user = ref(null);
    const loading = ref(false);
    const isLoggedIn = computed(() => user.value !== null);

    async function fetch() {
        loading.value = true;

        await axios.get('/api/user/me').then((r) => {
            user.value = r.data;
        }).catch((e) => {
            console.error(e);
        }).finally(() => {
            loading.value = false;
        });
    }

    function login(username, password) {
        loading.value = true;

        return axios.post('/api/login',
            { username, password },
            { withCredentials: true }
        ).then((r) => {
            user.value = r.data;
        }).finally(() => {
            loading.value = false;
        });
    }

    function logout() {
        loading.value = true;

        return axios.post('/api/logout').then(() => {
            user.value = null;
        }).catch((e) => {
            console.error(e);
        }).finally(() => {
            loading.value = false;
        });
    }

    function register(username, password, passwordConfirmation) {
        loading.value = true;

        return axios.post('/api/user/register', {
                username,
                password,
                passwordConfirmation
            },
            {
                withCredentials: true
            }).then((r) => {
            user.value = r.data;
        }).catch((e) => {
            console.error(e);
        }).finally(() => {
            loading.value = false;
        });
    }

    return {
        user,
        loading,
        isLoggedIn,
        fetch,
        login,
        logout,
        register
    };
});
