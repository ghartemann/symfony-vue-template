<template>
    <UFormField :size="size">
        <UInput
            v-model="model"
            :label="label"
            :placeholder="placeholder"
            :variant="variant"
            :required="required"
            :ui="{root: '!block'}"
        ></UInput>
    </UFormField>
</template>

<script setup>
const model = defineModel();

defineProps({
    label: {
        type: String,
        default: undefined
    },
    placeholder: {
        type: String,
        default: undefined
    },
    required: {
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