import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import tailwindcss from "tailwindcss";
import postcss from "postcss";

export default defineConfig({
    plugins: [
        symfonyPlugin(),
    ],
    build: {
        rollupOptions: {
            input: {
                app: "./assets/app.js"
            },
        }
    },
    resolve: {
        alias: {
            "@": `${__dirname}/assets`,
            "@components": `${__dirname}/assets/js/components`,
            "@pages": `${__dirname}/assets/js/pages`,
            "@router": `${__dirname}/assets/js/router`,
            "@store": `${__dirname}/assets/js/store`,
            "@styles": `${__dirname}/assets/styles`,
            "@templates": `${__dirname}/templates`,
            "@images": `${__dirname}/assets/images`,
        },
    },
    css: {
        postcss: {
            plugins: [
                postcss()
            ],
        },
    },
});
