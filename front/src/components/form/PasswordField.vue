<template>
    <UFormField :size="size">
        <UInput
            v-model="model"
            :label="secondTime ? 'Confirmer le mot de passe' : 'Mot de passe'"
            :placeholder="secondTime ? 'Entrez votre mot de passe à nouveau' : 'Entrez votre mot de passe'"
            variant="soft"
            size="xl"
            required
            :type="show ? 'text' : 'password'"
            :ui="{ trailing: 'pe-1', root: '!block' }"
        >
            <template #trailing>
                <UButton
                    color="neutral"
                    variant="link"
                    size="sm"
                    :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                    :aria-label="show ? 'Cacher le mot de passe' : 'Montrer le mot de passe'"
                    :aria-pressed="show"
                    aria-controls="password"
                    @click="show = !show"
                />
            </template>
        </UInput>
    </UFormField>
</template>

<script setup>
import { ref } from 'vue';

const model = defineModel();

const show = ref(false);

defineProps({
    secondTime: {
        type: Boolean,
        default: false
    },
    variant: {
        type: String,
        default: 'soft'
    },
    size: {
        type: String,
        default: 'xl'
    }
});
</script>

<style scoped>

</style>