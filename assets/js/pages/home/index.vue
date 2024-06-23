<template>
    <div id="wp-bg" class="tw-w-full tw-min-h-screen tw-flex tw-items-center tw-justify-center">
        <div class="tw-rounded-3xl tw-p-8 tw-text-center tw-bg-clip-padding tw-flex tw-flex-col tw-gap-2 tw-select-none">
            <h1 class="tw-text-6xl tw-font-semibold tw-text-white">Symfony 7 | Vue 3</h1>
            <h2 class="tw-text-4xl tw-font-semibold tw-text-white">Vite | Tailwind</h2>
            <div class="tw-text-2xl tw-text-white">L'incroyable template v1.4</div>
        </div>
    </div>

    <div class="tw-w-full tw-h-screen tw-py-10">
        <div class="tw-w-[72rem] tw-mx-auto">
            <div class="tw-text-center tw-text-5xl tw-mb-16">
                Commencer à coder <span class="tw-italic tw-font-semibold">vite</span>.
            </div>

            <div class="tw-w-full tw-grid tw-grid-cols-2 tw-gap-5">
                <div class="tw-border tw-border-red-500 tw-p-5 tw-rounded-xl">
                    <h3 class="tw-text-3xl tw-font-semibold tw-text-red-500">Des frameworks préconfigurés</h3>
                    <ul class="tw-list-disc">
                        <li>Symfony 7.1</li>
                        <li>Vue.js 3.4</li>
                        <li>Vite</li>
                    </ul>
                </div>

                <div class="tw-border tw-border-green-500 tw-p-5 tw-rounded-xl">
                    <h3 class="tw-text-3xl tw-font-semibold tw-text-green-500">Du CSS facilité</h3>
                    <ul class="tw-list-disc">
                        <li>TailwindCSS</li>
                        <li>Vuetify (optionnel)</li>
                        <li>Quasar (optionnel)</li>
                    </ul>
                </div>
            </div>

            <div class="tw-mt-10 tw-flex tw-justify-center">
                <button class="tw-bg-gray-950 tw-rounded-lg tw-px-3 tw-py-2 tw-text-white tw-text-2xl" @click="goToGithub">
                    Allez on y va
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
function goToGithub() {
    window.open('https://github.com/ghartemann/symfony-vue-template', '_blank');
}
</script>

<style scoped>
#wp-bg {
    background-image: url('/images/wp.jpeg');
    @apply tw-bg-cover tw-bg-center tw-bg-no-repeat tw-bg-gray-300;
}
</style>
