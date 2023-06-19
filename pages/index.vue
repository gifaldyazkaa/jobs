<script setup lang="ts">
const { data } = await _useSanity('products', true);
</script>

<template>
    <div class="md:flex md:flex-row md:items-start content-between">
        <Profile />
        <div class="card w-full p-4">
            <h3 class="font-semibold">Available products ({{ data.length }})</h3>
            <NuxtLink :to="`/products/${product._id}`" v-for="product in data">
                <div class="card w-full p-4 my-2 bg-opacity-50 inline-flex align-middle flex-row-reverse">
                    <Icon name="ic:round-read-more" size="48px" class="flex-grow-0 shrink-0 text-[#A9A9A9]" />
                    <div class="flex flex-col flex-grow flex-shrink ml-3">
                        <h2 class="font-semibold">{{ product.title }}</h2>
                        <p class="text-sm text-[#ACACAC]">{{ product.description }}</p>
                    </div>
                    <Icon :name="product.icon" size="48px" />
                </div>
            </NuxtLink>
            <Debugger :rootData="data" />
        </div>
    </div>
</template>

<style scoped></style>
