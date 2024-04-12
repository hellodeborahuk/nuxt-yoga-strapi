<template>
    <h1>Hello Debbie</h1>
    <div v-for="article in articles" :key="article.id">
      <h2>{{ article.attributes.title }}</h2>
      <p> {{ article.attributes.author }}</p>
    </div>
</template>

<script lang="ts" setup>
import {allArticlesQuery} from '../graphql/queries';

const {data} = await useAsyncQuery(allArticlesQuery);
const articles = data.value?.articles?.data ?? [];

</script>