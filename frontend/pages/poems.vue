<script lang="ts" setup>
import {allArticlesQuery} from '../graphql/queries';

const {data} = await useAsyncQuery(allArticlesQuery);
const articles = data.value?.articles?.data ?? [];

</script>

<template>
    <div  class="grid grid-cols-2">
        <Poem v-for="article in articles" :key="article.id" :article="article" />
    </div>
</template>

