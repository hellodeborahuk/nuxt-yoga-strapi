<script lang="ts" setup>
import {singleArticleQuery} from '../../graphql/queries';
import { StrapiBlocks, type BlocksContent } from 'vue-strapi-blocks-renderer';

const route = useRoute();
const {data} = await useAsyncQuery(singleArticleQuery, {id: route.query.id});
console.log(data)
const post = data.value.article.data.attributes

const VNode = StrapiBlocks({ content: data.value?.article?.data?.attributes?.body ?? {} });
</script>

<template>
    <div class="container prose lg:prose-xl my-20">
        <h2>{{post.title}}</h2>
        <img :src="`http://localhost:1337${post.featuredImage.data.attributes.url}`" alt="{{ post.featuredImage.data.attributes.alternativeText }}" />
        <VNode />
    </div>
</template>