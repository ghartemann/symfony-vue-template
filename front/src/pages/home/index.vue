<template>
    <div id="wp-bg" class="relative bg-cover">
        <login-form></login-form>

        <!-- SECTION 1 -->
        <div class="w-full min-h-screen flex items-center justify-center relative">
            <div class="rounded-full pt-5 pb-7 px-14 text-center bg-clip-padding flex flex-col gap-2 select-none bg-white/10">
                <h1 class="text-6xl lg:text-8xl font-semibold text-white">SymVue</h1>
                <div class="text-2xl lg:text-4xl text-white">L'incroyable template</div>
            </div>

            <div class="absolute bottom-64 rounded-full p-5 hover:bg-white/10 transition-all cursor-pointer anim" @click="scrollToSection2">
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"/>
                </svg>
            </div>
        </div>

        <!-- SECTION 2 -->
        <div id="section2" class="w-full min-h-screen flex items-center justify-center">
            <div class="sm:max-w-sm lg:max-w-4xl mx-auto">
                <div class="text-center text-5xl mb-16 text-white text-balance">
                    Pour commencer à coder <span class="italic font-semibold">vite</span>.
                </div>

                <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 px-10 lg:px-0">
                    <div v-for="tech in techs" class="py-4 px-5 rounded-xl bg-white/10 space-y-3">
                        <h3 class="text-3xl font-semibold">{{ tech.label }}</h3>

                        <ul class="list-disc ml-4">
                            <li v-for="item in tech.list">{{ item }}</li>
                        </ul>
                    </div>
                </div>

                <div class="mt-10 flex justify-center">
                    <button
                        @click="goToGithub"
                        type="button"
                        class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
                    >
                        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                        </svg>
                        C'est parti
                    </button>
                </div>
            </div>
        </div>

        <div class="absolute bottom-1 left-1/2 -translate-x-1/2 text-sm">
            © Guillaume Hartemann-Piollet - <a href="https://ghartemann.fr">ghartemann.fr</a>
        </div>
    </div>
</template>

<script setup>
import LoginForm from "../../components/LoginForm.vue";

const techs = [
    {
        label: 'CSS facilité',
        list: [
            'TailwindCSS',
            'Nuxt UI'
        ]
    },
    {
        label: 'Frameworks préconfigurés',
        list: [
            'Symfony 7.3',
            'Vue.js 3.5',
            'Nuxt.js 3',
            'Vite 6'
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
