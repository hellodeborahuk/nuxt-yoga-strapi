<script lang="ts" setup>
import { StrapiBlocks, type BlocksContent } from 'vue-strapi-blocks-renderer';

const props = defineProps(['attributes'])
const VNode = StrapiBlocks({ content: props.attributes?.description ?? [] });
</script>

<template>
   <div class="bg-teal-600 p-6 rounded-md text-white relative">
    <h3>{{ attributes.title }}</h3>
    <img  :src="`http://localhost:1337${attributes.icon.data.attributes.url}`" :alt="attributes.title" class="w-12 h-12 absolute top-3 right-3 opacity-60" />
    <div class="pt-6"><VNode /></div>
   </div>
</template>