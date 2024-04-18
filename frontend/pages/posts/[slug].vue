<script lang="ts" setup>
import {singleArticleQuery} from '../../graphql/queries';
import { StrapiBlocks, type BlocksContent } from 'vue-strapi-blocks-renderer';

const route = useRoute();
const {data} = await useAsyncQuery(singleArticleQuery, {id: route.query.id});
const post = data.value.article.data.attributes;

const VNode = StrapiBlocks({ content: data.value?.article?.data?.attributes?.body ?? {} });

import type { Comment } from "~/types/comments";
const { create } = useStrapi();

const name = ref("")
const message = ref("")
const posted = ref<Array<any>>([]);
const comments = computed(() => {
    const comments = post.comments?.data ?? [];
    return [...comments, ...posted.value];
});

const createComment = async () => {
    await create<Comment>("comments", {
        name: name.value,
        message: message.value,
        article: data.value.article.data.id,
    })
    
    posted.value.push({attributes: {
        message: message.value,
        name: name.value,
    }});

    name.value = ''
    message.value = ''
}

</script>

<template>
    <div class="container prose md:prose-xl xl:prose-2xl my-20">
        <h2>{{post.title}}</h2>
        <img :src="`http://localhost:1337${post.featuredImage.data.attributes.url}`" alt="{{ post.featuredImage.data.attributes.alternativeText }}" />
        <VNode />
        <div>
            <h4>Leave a comment</h4>
            <form @submit.prevent="createComment" class="space-y-6 lg:w-2/3">
                <div>
                    <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <div class="mt-2">
                    <input v-model="name" type="text" name="name" id="name" autocomplete="name" class="appearance-none block w-full bg-white rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-core-brand-alpha">
                </div>
                </div>
                <div>
                <label for="message" class="block text-sm font-medium leading-6 text-gray-900">Comment</label>
                <div class="mt-2">
                    <textarea v-model="message" name="message" id="message" autocomplete="message" class="appearance-none block w-full bg-white rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-core-brand-alpha"></textarea>
                </div>
                </div>
                <button type="submit" class="button-primary">submit</button>
            </form>
        </div>
        <div v-if="post.comments.data.length > 0" class="space-y-6 mt-10">
            <h4>Comments</h4>
            <div v-for="comment in comments" class="border border-core-brand-beta p-6 rounded-md not-prose text-lg">
                <p><span class="font-medium">Name:</span> {{ comment.attributes.name }}</p>
                <p><span class="font-medium">Message:</span> {{ comment.attributes.message }}</p>
            </div>
        </div>
    </div>

   
</template>