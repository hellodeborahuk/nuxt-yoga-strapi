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
  </div>
  <Newsletter />

</template>