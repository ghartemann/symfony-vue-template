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
                app: "./src/app.js"
            }
        },
        outDir: '../back/public/build',
    },
    resolve: {
        alias: {
            "@": `${__dirname}/`,
            "@pages": `${__dirname}/src/pages`,
            "@components": `${__dirname}/src/components`,
            "@composables": `${__dirname}/src/composables`,
            "@store": `${__dirname}/src/store`,
            "@images": `${__dirname}/assets/images`
        }
    }
});
