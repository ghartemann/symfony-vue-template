import {defineConfig} from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import vuePlugin from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import ui from '@nuxt/ui/vite';

export default defineConfig({
    plugins: [
        vuePlugin(),
        symfonyPlugin(),
        tailwindcss(),
        ui()
    ],
    build: {
        rollupOptions: {
            input: {
                app: "./assets/app.js"
            }
        }
    },
    resolve: {
        alias: {
            "@": `${__dirname}/assets`,
            "@components": `${__dirname}/assets/js/components`,
            "@composables": `${__dirname}/assets/js/composables`,
            "@pages": `${__dirname}/assets/js/pages`,
            "@stores": `${__dirname}/assets/js/stores`,
            "@images": `${__dirname}/assets/images`
        }
    }
});
