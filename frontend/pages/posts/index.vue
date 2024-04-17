<script lang="ts" setup>
import {allArticlesQuery} from '../graphql/queries';

const {data} = await useAsyncQuery(allArticlesQuery);
const articles = data.value?.articles?.data ?? [];

</script>

<template>
    <div class="container my-16">
        <h2 class="mb-12 text-center">Recent blog posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div v-for="article in articles" :key="article.id">
                <div class="rounded-md border border-red-200 h-full">
                    <NuxtLink :to="{ path: `/posts/${article.attributes.slug}`, query: {id: article.id }}">
                        <div class="overflow-hidden block rounded-t-md">
                            <img :src="`http://localhost:1337${article.attributes.featuredImage.data.attributes.url}`" alt="{{ article.attributes.title }}" class="image-hover aspect-video object-center" />
                        </div>
                        <div class="p-6 space-y-4">
                            <h3>{{ article.attributes.title }}</h3>
                            <p v-if="article.attributes.excerpt" class="line-clamp-4">{{ article.attributes.excerpt }}</p>
                            <p class="text-teal-600 hover:text-zinc-700">Read more</p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>