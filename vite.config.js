import compress from 'vite-plugin-compression';
import imageMin from 'vite-plugin-imagemin';

export default {
    css: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
                require('postcss'),
            ],
        },
    },
    build: {
    },
    plugins: [
        imageMin({
            svgo: {
                // https://github.com/svg/svgo#built-in-plugins
                plugins: [
                    { name: 'RemoveTitle', active: false },
                    { name: 'RemoveDescription', active: false },
                    { name: 'RemoveViewBox', active: false },
                    { name: 'removeDimensions', active: true },
                    { name: 'removeScriptElement', active: true },
                    { name: 'removeStyleElement', active: true },
                ],
            },
        }),
        compress({
            algorithm: 'brotliCompress',
        }),
    ],
}
