<script lang="ts" setup>
import {singlePageQuery} from '../graphql/queries';

const {data, error} = await useAsyncQuery(singlePageQuery, {slug: '/'});
const page = data.value?.pages.data[0] ?? {};
</script>

<template>
  <div v-if="page.attributes" v-for="segment in page.attributes.segments">
    <Hero v-if="segment.__typename === 'ComponentHeroHero'" :description="segment.description" :image="segment.image" :price="segment.price" />
    <Classes v-if="segment.__typename === 'ComponentClassesClasses'" :classes="segment" />
    <TextImageBlock v-if="segment.__typename === 'ComponentContentTextAndImageBlock'" :copy="segment.copy" :image="segment.image" />
    <Newsletter v-if="segment.__typename === 'ComponentContentNewsletter'" :heading="segment.heading" :copy="segment.copy" :placeholderInput1="segment.placeholderInput1" :placeholderInput2="segment.placeholderInput2" :buttonText="segment.buttonText" />
    <ImageGrid v-if="segment.__typename === 'ComponentContentImageGrid'" :images="segment.images" />
    <ContactForm  v-if="segment.__typename === 'ComponentContactContactForm'" />
  </div>
</template>