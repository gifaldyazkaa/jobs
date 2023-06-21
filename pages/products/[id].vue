<script setup lang="ts">
const { id } = useRoute().params;
const { data } = await useFetch(`/api/sanity?schema=products&prId=${id}`);
const product = data;
</script>

<template>
    <div>
        <NuxtLink to="/"><Icon name="ion:caret-back-outline" /> Go back</NuxtLink>
        <div class="w-full p-4 my-2 inline-flex align-middle">
            <Icon :name="product.icon" size="24rem" class="w-40 h-auto md:w-32 lg:w-14" />
            <div class="flex flex-col flex-grow flex-shrink ml-3">
                <h2 class="font-semibold text-2xl">
                    {{ product.title }}
                    <span
                        v-if="!product.isAvailable"
                        class="bg-red-600 bg-opacity-70 text-sm ring-2 ring-red-500 ml-1 p-1 px-2 rounded-full"
                        >Closed</span
                    >
                </h2>
                <p class="text-lg text-[#ACACAC]">{{ product.description }}</p>
            </div>
        </div>
        <div>
            <button
                :disabled="!data.isAvailable"
                class="bg-[#373737] p-2 px-4 text-base rounded-lg font-semibold disabled:bg-[#333333] disabled:text-[#ACACAC] disabled:cursor-not-allowed"
            >
                Order this Product
            </button>
            <button class="bg-transparent ml-2 ring-2 ring-[#373737] p-2 px-4 text-base rounded-lg font-semibold">
                Ask something
            </button>
        </div>
    </div>
</template>

<style scoped></style>
