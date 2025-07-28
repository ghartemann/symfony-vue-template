<template>
    <div id="wp-bg" class="relative bg-cover">
        <login-form></login-form>

        <!-- SECTION 1 -->
        <div class="w-full min-h-screen flex items-center justify-center relative">
            <div class="rounded-full pt-5 pb-7 px-14 text-center bg-clip-padding flex flex-col gap-2 select-none bg-white/10">
                <h1 class="text-6xl lg:text-8xl font-semibold text-white">
                    SymVue
                </h1>

                <div class="text-2xl lg:text-4xl text-white">
                    L'incroyable template
                </div>
            </div>

            <div class="absolute bottom-64 rounded-full p-5 hover:bg-white/10 transition-all cursor-pointer anim"
                 @click="scrollToSection2"
            >
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
                        <h3 class="text-3xl font-semibold">
                            {{ tech.label }}
                        </h3>

                        <ul class="list-disc ml-4">
                            <li v-for="item in tech.list">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="mt-10 flex justify-center">
                    <UButton
                        @click="goToGithub"
                        icon="i-lucide-github"
                    >
                        C'est parti
                    </UButton>
                </div>
            </div>
        </div>

        <div class="absolute bottom-1 left-1/2 -translate-x-1/2 text-sm">
            © Guillaume Hartemann-Piollet - <a href="https://ghartemann.fr">ghartemann.fr</a>
        </div>
    </div>
</template>

<script setup>
import LoginForm from "@components/LoginForm.vue";

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
    document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
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
