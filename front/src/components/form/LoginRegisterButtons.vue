<template>
    <div class="flex flex-col items-center justify-center gap-2">
        <template v-if="hasAccount">
            <UButton
                type="submit"
                variant="soft"
                color="primary"
                size="xl"
                :loading="loading"
                :disabled="loading"
            >
                Se connecter
            </UButton>

            <UButton
                variant="ghost"
                color="neutral"
                size="sm"
                @click="hasAccount = !hasAccount"
                :disabled="loading"
            >
                Pas de compte ? S'inscrire
            </UButton>
        </template>

        <template v-else>
            <UButton
                type="submit"
                variant="soft"
                color="primary"
                size="xl"
                :loading="loading"
                :disabled="loading"
            >
                S'inscrire
            </UButton>

            <UButton
                variant="ghost"
                color="neutral"
                size="sm"
                @click="hasAccount = !hasAccount"
                :disabled="loading"
            >
                Déjà un compte ? Se connecter
            </UButton>
        </template>
    </div>
</template>

<script setup>
const hasAccount = defineModel('hasAccount', { type: Boolean, default: true });
const loading = defineModel('loading', { type: Boolean, default: false });
</script>

<style scoped>

</style>