<script setup lang="ts">
defineProps({
    socials: {
        required: true,
        type: Object,
    },
});
</script>

<template>
    <div class="inline-flex flex-row my-2 text-[#A9A9A9]">
        <a
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.name"
            v-for="social in socials"
        >
            <Icon :name="social.icon" size="32px" class="mr-2" />
        </a>
    </div>
</template>

<style scoped></style>
