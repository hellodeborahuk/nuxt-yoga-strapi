<script lang="ts" setup>
import {singleArticleQuery} from '../../graphql/queries';
import { StrapiBlocks, type BlocksContent } from 'vue-strapi-blocks-renderer';

const route = useRoute();
const {data} = await useAsyncQuery(singleArticleQuery, {id: route.query.id});

const VNode = StrapiBlocks({ content: data.value?.article?.data?.attributes?.body ?? {} });
</script>

<template>
    <div>
        <VNode />
    </div>
</template>