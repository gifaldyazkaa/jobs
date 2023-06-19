// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sanity', 'nuxt-icon'],
    builder: 'vite',
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        },
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    },
    sanity: {
        projectId: 'xy8c9cqt',
    },
    imports: {
        dirs: ['./composables', './components', './scripts', './utils'],
    },
});
