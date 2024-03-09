<template>
    <div id="wp-bg" class="tw-w-full tw-min-h-screen tw-flex tw-items-center tw-justify-center">
        <div class="tw-rounded-3xl tw-p-8 tw-text-center tw-bg-clip-padding tw-backdrop-filter tw-backdrop-blur-lg tw-bg-opacity-10 tw-bg-gray-900 tw-flex tw-flex-col tw-gap-2 tw-select-none">
            <h1 class="tw-text-6xl tw-font-semibold tw-text-white">Symfony 7 | Vue 3</h1>
            <h2 class="tw-text-4xl tw-font-semibold tw-text-white">Vite | Tailwind</h2>
            <div class="tw-text-2xl tw-text-white">L'incroyable template v1.4</div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#wp-bg {
    background-image: url('/images/wp.jpg');
    @apply tw-bg-cover tw-bg-center tw-bg-no-repeat tw-bg-fixed tw-bg-gray-300;
}
</style>
