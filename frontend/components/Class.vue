<script lang="ts" setup>
import { StrapiBlocks, type BlocksContent } from 'vue-strapi-blocks-renderer';

const props = defineProps(['attributes'])
const VNode = StrapiBlocks({ content: props.attributes?.description ?? [] });
</script>

<template>
   <div :class="['p-6 rounded-md  relative', {'bg-red-200' : attributes.backgroundColour === 'pink', 'bg-teal-600 text-white' :  attributes.backgroundColour === 'teal',  'bg-stone-300' :  attributes.backgroundColour === 'cream'}]">
    <h3>{{ attributes.title }}</h3>
    <img  :src="`http://localhost:1337${attributes.icon.data.attributes.url}`" :alt="attributes.title" class="w-12 h-12 absolute top-3 right-3 opacity-70" />
    <div class="pt-6"><VNode /></div>
   </div>
</template>