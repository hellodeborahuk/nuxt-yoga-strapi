<script lang="ts" setup>
import { StrapiBlocks, type BlocksContent } from 'vue-strapi-blocks-renderer';
const props = defineProps(['attributes']);
const VNode = StrapiBlocks({ content: props.attributes?.copy ?? [] });
</script>

<template>
    <div class="container mb-10 lg:mb-20 lg:w-1/2">
        <h2 class="mb-6">{{attributes.heading}}</h2>
        <p class="mb-6"><VNode /></p>
        <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium leading-6 text-gray-900">{{attributes.labelValue1}}</label>
              <div class="mt-2">
                <input type="text" name="name" id="name" autocomplete="name" class="appearance-none block w-full bg-white rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-core-brand-alpha">
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">{{attributes.labelValue2}}</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" class="appearance-none block w-full bg-white rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-core-brand-alpha">
              </div>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium leading-6 text-gray-900">{{attributes.labelValue3}}</label>
              <div class="mt-2">
                <textarea name="message" id="message" autocomplete="message" class="appearance-none block w-full bg-white rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-core-brand-alpha"></textarea>
              </div>
            </div>
            <button type="submit" class="button-primary">{{attributes.buttonText}}</button>
        </form>
    </div>
</template>