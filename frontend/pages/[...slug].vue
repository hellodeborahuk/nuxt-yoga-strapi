<script lang="ts" setup>
import {singlePageQuery} from '../graphql/queries';

// Get the current url path, default to /
const route = useRoute();
const slug = (route.params?.slug === '')
  ? ['/']
  : route.params?.slug;
console.log(slug)
const {data, error} = await useAsyncQuery(singlePageQuery, {slug: slug.join('/')});
const page = data.value?.pages.data[0] ?? {};
</script>

<template>
  <div v-if="error">
    404 Page not found
  </div>
  <div v-else-if="page.attributes" v-for="segment in page.attributes.segments">
    <Hero v-if="segment.__typename === 'ComponentHeroHero'" :description="segment.description" :image="segment.image" :price="segment.price" />
    <Classes v-if="segment.__typename === 'ComponentClassesClasses'" :classes="segment" />
    <TextImageBlock v-if="segment.__typename === 'ComponentContentTextAndImageBlock'" :copy="segment.copy" :image="segment.image" />
    <Newsletter v-if="segment.__typename === 'ComponentContentNewsletter'" :heading="segment.heading" :copy="segment.copy" :placeholderInput1="segment.placeholderInput1" :placeholderInput2="segment.placeholderInput2" :buttonText="segment.buttonText" />
    <ImageGrid v-if="segment.__typename === 'ComponentContentImageGrid'" :images="segment.images" />
    <ContactForm  v-if="segment.__typename === 'ComponentContactContactForm'" :attributes="segment" />
  </div>
</template>