// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/icon',
        '@nuxt/scripts',
        '@nuxt/test-utils',
        '@nuxt/ui',
        '@vueuse/nuxt',
    ],
    devtools: { enabled: true },
    app: {
        head: {
            title: 'PM Weather',
        },
    },
    css: ['~/assets/css/main.css'],
    runtimeConfig: {
        owApiKey: '',
    },
    compatibilityDate: '2024-11-01',
    eslint: {
        checker: true,
        config: {
            stylistic: {
                indent: 4,
                semi: true,
                quotes: 'single',
            },
        },
    },
});
