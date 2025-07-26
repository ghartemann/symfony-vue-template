<template>
    <template v-if="!isLoggedIn">
        <UModal
            v-model:open="open"
            :title="hasAccount ? 'Connexion' : 'Inscription'"
            overlay
        >
            <UTooltip>
                <UButton
                    icon="i-lucide-user"
                    variant="ghost"
                    size="xl"
                    color="neutral"
                    :ui="{base: 'cursor-pointer fixed top-2 right-2 z-50'}"
                ></UButton>

                <template #content>
                    <span>Se connecter</span>
                </template>
            </UTooltip>

            <template #body>
                <UForm
                    v-if="hasAccount"
                    :state="state"
                    @submit.prevent="login"
                    class="flex flex-col w-full gap-4"
                >
                    <TextField
                        v-model="state.username"
                        label="Nom d'utilisateur"
                        placeholder="Entrez votre nom d'utilisateur"
                    ></TextField>

                    <PasswordField
                        v-model="state.password"
                    ></PasswordField>

                    <LoginRegisterButtons
                        v-model:has-account="hasAccount"
                        v-model:loading="loading"
                    ></LoginRegisterButtons>
                </UForm>

                <UForm
                    v-else
                    :state="state"
                    @submit.prevent="register"
                    class="flex flex-col gap-4"
                >
                    <TextField
                        v-model="state.username"
                        label="Nom d'utilisateur"
                        placeholder="Entrez un nom d'utilisateur"
                    ></TextField>

                    <PasswordField
                        v-model="state.password"
                    ></PasswordField>

                    <PasswordField
                        v-model="state.passwordConfirmation"
                        second-time
                    ></PasswordField>

                    <LoginRegisterButtons
                        v-model:has-account="hasAccount"
                        v-model:loading="loading"
                    ></LoginRegisterButtons>
                </UForm>
            </template>
        </UModal>
    </template>

    <template v-else>
        <UTooltip>
            <UButton
                icon="i-lucide-log-out"
                variant="ghost"
                size="xl"
                color="neutral"
                :ui="{base: 'cursor-pointer fixed top-2 right-2 z-50'}"
                @click="logout"
            ></UButton>

            <template #content>
                <span>Se déconnecter</span>
            </template>
        </UTooltip>
    </template>
</template>

<script setup>
import { reactive, ref } from "vue";
import TextField from "@components/form/TextField.vue";
import PasswordField from "@components/form/PasswordField.vue";
import LoginRegisterButtons from "@components/form/LoginRegisterButtons.vue";
import { useUserStore } from "@/js/store/userStore.js";
import { storeToRefs } from "pinia";

const { isLoggedIn } = storeToRefs(useUserStore());

const open = ref(false);
const hasAccount = ref(true);

const loading = ref(false);

const state = reactive({
    username: '',
    password: '',
    passwordConfirmation: ''
});

function login() {
    if (state.username && state.password) {
        loading.value = true;

        useUserStore().login(state.username, state.password).then(() => {
            state.username = '';
            state.password = '';

            open.value = false;
        }).catch((e) => {
            console.error(e);
        }).finally(() => {
            loading.value = false;
        });
    } else {
        console.error('Username and password are required');
    }
}

function register() {
    if (state.username && state.password && state.password === state.passwordConfirmation) {
        loading.value = true;

        useUserStore().register(state.username, state.password, state.passwordConfirmation).then(() => {
            state.username = '';
            state.password = '';
            state.passwordConfirmation = '';

            open.value = false;
        }).catch((e) => {
            console.error(e);
        }).finally(() => {
            loading.value = false;
        });
    } else {
        console.error('Username, password and confirmation are required and must match');
    }
}

function logout() {
    useUserStore().logout().then(() => {
        console.log('Logged out successfully');
    }).catch((e) => {
        console.error(e);
    });
}
</script>

<style scoped>

</style>