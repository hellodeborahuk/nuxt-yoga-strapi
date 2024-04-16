<script lang="ts" setup>
import { StrapiBlocks, type BlocksContent } from 'vue-strapi-blocks-renderer';

const props = defineProps(['copy',  'image'])
const VNode = StrapiBlocks({ content: props.copy ?? [] });
</script>

<template>
    <div class="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 mb-10 md:mb-20 items-center">
        <img :src="`http://localhost:1337${props.image.data.attributes.url}`" :alt="props.image.data.attributes.alternativeText" loading="lazy" class="rounded-md" />
        <div class="prose"><VNode class="prose md:" /></div>
    </div>
</template>