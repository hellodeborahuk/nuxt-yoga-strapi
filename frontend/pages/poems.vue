<script lang="ts" setup>
import {allArticlesQuery} from '../graphql/queries';

const {data} = await useAsyncQuery(allArticlesQuery);
const articles = data.value?.articles?.data ?? [];

</script>

<template>
    <div  class="container grid grid-cols-2 gap-10 my-20">
        <Poem v-for="article in articles" :key="article.id" :article="article" />
    </div>
</template>

