<script lang="ts" setup>
import {singlePageQuery} from '../graphql/queries';

const {data} = await useAsyncQuery(singlePageQuery);
const page = data.value?.page?.data ?? [];
</script>

<template>
  <div v-for="segment in page.attributes.segments">
    <Hero v-if="segment.__typename === 'ComponentHeroHero'" :description="segment.description" :image="segment.image" :price="segment.price" />
    <Classes v-if="segment.__typename === 'ComponentClassesClasses'" :classes="segment" />
    <TextImageBlock v-if="segment.__typename === 'ComponentContentTextAndImageBlock'" :copy="segment.copy" :image="segment.image" />
    <Newsletter v-if="segment.__typename === 'ComponentContentNewsletter'" :heading="segment.heading" :copy="segment.copy" :placeholderInput1="segment.placeholderInput1" :placeholderInput2="segment.placeholderInput2" :buttonText="segment.buttonText" />
    <ImageGrid v-if="segment.__typename === 'ComponentContentImageGrid'" :images="segment.images" />
  </div>

</template>