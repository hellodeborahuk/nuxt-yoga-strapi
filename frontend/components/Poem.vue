<script lang="ts" setup>
import { StrapiBlocks, type BlocksContent } from 'vue-strapi-blocks-renderer';

const props = defineProps(['article'])
const VNode = StrapiBlocks({ content: props.article?.attributes?.body ?? {} });

</script>

<template>
        <div class="border border-teal-600 rounded-md p-10">
            <h2>{{ article.attributes.title }}</h2>
            <p>by {{ article.attributes.author }}</p>
            <div class="pt-6"><VNode /></div>
        </div>
</template>

