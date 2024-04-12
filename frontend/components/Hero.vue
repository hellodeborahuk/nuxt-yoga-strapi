<script lang="ts" setup>
const props = defineProps(['price', 'description', 'image'])
</script>

<template>
    <div class="relative w-full h-96" :style="{background: `linear-gradient(58deg, rgba(32, 153, 139, .6), rgba(32, 153, 139, .6)), center center / cover no-repeat url(http://localhost:1337${image.data.attributes.url});`}">
        <!-- <img :src="`http://localhost:1337${image.data.attributes.url}`" :alt="image.data.attributes.alternativeText" class="w-full h-96 object-cover object-center "/> -->
        <h2 class="hidden lg:block absolute bottom-16 left-14 md:w-2/3 lg:w-1/3 text-white">{{ description }}</h2>
        <div class="hidden lg:block absolute top-12 right-20 bg-red-200 rounded-full p-8 text-center">
            <p class="text-5xl font-medium">£{{ price }}</p>
            <p>per month</p>
        </div>
    </div>
</template>