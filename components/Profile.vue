<script setup lang="ts">
const { data } = await _useSanity('about');
</script>

<template>
    <div class="card w-full h-auto md:w-[24rem] mb-4 md:mb-0 mr-4 flex flex-col items-center justify-center p-4">
        <div>
            <img :src="data.picture" :alt="data.name" class="w-36 rounded-full" />
        </div>
        <div class="mt-2">
            <h2 class="text-2xl font-bold">{{ data.name }}</h2>
        </div>
        <div>
            <h3 class="text-center font-medium text-[#BDBDBD]">{{ data.role }}</h3>
            <p class="text-sm text-center text-[#A9A9A9]">{{ data.bio }}</p>
        </div>
        <Socials :socials="data.socials" />
        <Skillsets :skills="data.skillsets" />
    </div>
</template>

<style scoped></style>
