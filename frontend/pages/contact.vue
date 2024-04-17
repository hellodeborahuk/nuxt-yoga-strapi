<script lang="ts" setup>
  import {contactPageQuery} from '../graphql/queries';
  //import { StrapiBlocks, type BlocksContent } from 'vue-strapi-blocks-renderer';

  const {data} = await useAsyncQuery(contactPageQuery);
  const page = data.value?.page?.data ?? [];
  console.log(page)
  //const VNode = StrapiBlocks({ content: page ?? [] });
</script>

<template>

    <div class="container mb-10 lg:mb-20 lg:w-1/2">
      <h2>{{page.attributes.segments[0].heading}}</h2>
      <!-- <p class="mb-6"><VNode /></p> -->
        <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium leading-6 text-gray-900">{{page.attributes.segments[0].labelValue1}}</label>
              <div class="mt-2">
                <input type="text" name="name" id="name" autocomplete="name" class="appearance-none block w-full bg-white rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-core-brand-alpha">
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">{{page.attributes.segments[0].labelValue2}}</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" class="appearance-none block w-full bg-white rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-core-brand-alpha">
              </div>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium leading-6 text-gray-900">{{page.attributes.segments[0].labelValue3}}</label>
              <div class="mt-2">
                <textarea name="message" id="message" autocomplete="message" class="appearance-none block w-full bg-white rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-core-brand-alpha"></textarea>
              </div>
            </div>
            <button type="submit" class="button-primary">{{page.attributes.segments[0].buttonText}}</button>
        </form>
    </div>
</template>