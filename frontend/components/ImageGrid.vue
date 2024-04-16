<script lang="ts" setup>
    const props = defineProps(['images'])
</script>

<template>
    <div class="container grid grid-cols-2 lg:grid-cols-4 mb-10 lg:mb-20 gap-10 justify-items-center">
        <div v-for="image in props.images.data">
            <img :src="`http://localhost:1337${image.attributes.url}`" :alt="image.attributes.alternativeText" loading="lazy" class="aspect-square object-cover lg:max-w-56 lg:max-h-56 rounded-md" />
        </div>
    </div>
</template>