<template>
    <div id="wp-bg">
        <!-- SECTION 1 -->
        <div class="tw-w-full tw-min-h-screen tw-flex tw-flex-col tw-gap-10 tw-items-center tw-justify-center">
            <div class="tw-rounded-full tw-pt-5 tw-pb-7 tw-px-14 tw-text-center tw-bg-clip-padding tw-flex tw-flex-col tw-gap-2 tw-select-none tw-bg-white/10">
                <h1 class="tw-text-4xl lg:tw-text-8xl tw-font-semibold tw-text-white">SymVue</h1>
                <div class="tw-text-3xl tw-text-white">L'incroyable template v1.4</div>
            </div>

            <div class="tw-rounded-full tw-p-5 hover:tw-bg-white/10 tw-transition-all tw-cursor-pointer anim" @click="scrollToSection2">
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"/>
                </svg>
            </div>
        </div>

        <!-- SECTION 2 -->
        <div id="section2" class="tw-w-full tw-min-h-screen tw-flex tw-items-center tw-justify-center">
            <div class="sm:tw-max-w-sm lg:tw-max-w-4xl tw-mx-auto">
                <div class="tw-text-center tw-text-5xl tw-mb-16 tw-text-white">
                    Pour commencer à coder <span class="tw-italic tw-font-semibold">vite</span>.
                </div>

                <div class="tw-w-full tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-5 tw-px-10 lg:tw-px-0">
                    <div v-for="tech in techs" class="tw-py-4 tw-px-5 tw-rounded-xl tw-bg-white/10 tw-space-y-3">
                        <h3 class="tw-text-3xl tw-font-semibold">{{ tech.label }}</h3>
                        <ul class="tw-list-disc tw-ml-4">
                            <li v-for="item in tech.list">{{ item }}</li>
                        </ul>
                    </div>
                </div>

                <div class="tw-mt-10 tw-flex tw-justify-center">
                    <button
                        @click="goToGithub"
                        type="button"
                        class="tw-text-white tw-bg-[#24292F] hover:tw-bg-[#24292F]/90 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-[#24292F]/50 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center tw-inline-flex tw-items-center tw-me-2 tw-mb-2"
                    >
                        <svg class="tw-w-4 tw-h-4 tw-me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                        </svg>
                        C'est parti
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const techs = [
    {
        label: 'CSS facilité',
        list: [
            'TailwindCSS',
            'Vuetify (optionnel)',
            'Quasar (optionnel)'
        ]
    },
    {
        label: 'Frameworks préconfigurés',
        list: [
            'Symfony 7.1',
            'Vue.js 3.4',
            'Vite'
        ]
    },
    {
        label: 'CI/CD intégré',
        list: [
            'Docker',
            'GitHub Actions',
            'Github Secrets'
        ]
    }
];

function scrollToSection2() {
    document.getElementById('section2').scrollIntoView({behavior: 'smooth'});
}

function goToGithub() {
    window.open('https://github.com/ghartemann/symfony-vue-template', '_blank');
}
</script>

<style lang="scss" scoped>
#wp-bg {
    background-image: url('@images/wp.jpeg');
    @apply tw-bg-cover tw-bg-center tw-bg-no-repeat tw-bg-gray-300;
}

* {
    color: white;
}

.anim {
    animation: upDown .75s infinite alternate;
}

@keyframes upDown {
    0% {
        transform: translateY(10px);
    }

    100% {
        transform: translateY(0);
    }
}
</style>
