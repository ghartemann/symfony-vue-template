import {defineConfig} from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import tailwindcss from "tailwindcss";
import postcss from "postcss";
import vuePlugin from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        vuePlugin(),
        symfonyPlugin()
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
            "@images": `${__dirname}/assets/images`,
        }
    },
    css: {
        postcss: {
            plugins: [
                postcss(),
                tailwindcss
            ],
        },
    },
});
