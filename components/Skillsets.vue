<script setup lang="ts">
defineProps({
    skills: {
        required: true,
        type: Object,
    },
});
</script>

<template>
    <div class="card w-full p-4">
        <h3 class="font-semibold">Skill sets</h3>
        <div
            class="mt-1 mr-1 inline-flex flex-row align-center bg-[#373737] p-1 px-2 rounded-lg"
            v-for="skill in skills"
        >
            <Icon :name="skill.icon" size="18px" />
            <p class="ml-1 text-sm">{{ skill.name }}</p>
        </div>
    </div>
</template>

<style scoped></style>
