<script setup lang="ts">
useHead({
    title: 'Jobs site | Gifaldy Azka',
    htmlAttrs: {
        lang: 'en',
    },
    bodyAttrs: {
        class: 'bg-black text-white',
    },
});
</script>

<template>
    <NuxtLoadingIndicator color="var(--gradient)" :throttle="0" :height="3" />
    <div class="container max-w-full font-lexend px-10 lg:px-20 py-10">
        <slot />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap');
:root {
    --gradient: repeating-linear-gradient(90deg, #00dc82 0, #34cdfe 50%, #0047e1);
}
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
