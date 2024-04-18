<script lang="ts" setup>
import {singleArticleQuery} from '../../graphql/queries';
import { StrapiBlocks, type BlocksContent } from 'vue-strapi-blocks-renderer';

const route = useRoute();
const {data} = await useAsyncQuery(singleArticleQuery, {id: route.query.id});
const post = data.value.article.data.attributes
const VNode = StrapiBlocks({ content: data.value?.article?.data?.attributes?.body ?? {} });

import type { Comment } from "~types"
const { create } = useStrapi()
const name = ref("")
const message = ref("")

// http://localhost:3000/posts/the-benefits-of-pranayama?name=Debbie&message=ds

const createComment = async () => {
    console.log('this worked')
    await create<Comment>("comments", {
        name: name.value,
        message: message.value
    })
    console.log(name, message)
}
</script>

<template>
    <div class="container prose md:prose-xl xl:prose-2xl my-20">
        <h2>{{post.title}}</h2>
        <img :src="`http://localhost:1337${post.featuredImage.data.attributes.url}`" alt="{{ post.featuredImage.data.attributes.alternativeText }}" />
        <VNode />
        <div>
            <h4>Leave a comment</h4>
            <form class="space-y-6 lg:w-2/3">
                <div>
                    <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <div class="mt-2">
                    <input type="text" name="name" id="name" autocomplete="name" class="appearance-none block w-full bg-white rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-core-brand-alpha">
                </div>
                </div>
                <div>
                <label for="message" class="block text-sm font-medium leading-6 text-gray-900">Comment</label>
                <div class="mt-2">
                    <textarea name="message" id="message" autocomplete="message" class="appearance-none block w-full bg-white rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-core-brand-alpha"></textarea>
                </div>
                </div>
                <button @click="createComment();$router.go(-1)" type="submit" class="button-primary">submit</button>
            </form>
        </div>
        <div>
            <h4>Comments - v-if comments then display</h4>
            <!-- <div v-for="comment in comments"></div> -->
        </div>
    </div>

   
</template>