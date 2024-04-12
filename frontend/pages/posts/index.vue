<script lang="ts" setup>
import {allArticlesQuery} from '../graphql/queries';

const {data} = await useAsyncQuery(allArticlesQuery);
const articles = data.value?.articles?.data ?? [];

</script>

<template>
    <div  class="container grid grid-cols-3 gap-10 my-20">
        <div v-for="article in articles" :key="article.id">
            <div class="rounded-md border border-teal-600">
                <NuxtLink :to="{ path: `/posts/${article.attributes.slug}`, query: {id: article.id }}">
                    <img src="/" alt="{{ article.attributes.title }}" class="rounded-t-md" />
                    <div class="p-6">
                        <h3>{{ article.attributes.title }}</h3>
                        <p>by {{ article.attributes.author }}</p>
                    </div>
                    
                </NuxtLink>
                
            </div>
        </div>
    </div>
</template>