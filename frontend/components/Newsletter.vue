<script lang="ts" setup>
import { StrapiBlocks, type BlocksContent } from 'vue-strapi-blocks-renderer';
const props = defineProps(['heading', 'copy', 'placeholderInput1', 'placeholderInput2', 'buttonText'])

const VNode = StrapiBlocks({ content: props.copy ?? [] });

</script>

<template>
    <div class="bg-core-brand-charlie mb-10 md:mb-20">
        <div class="container space-y-4 md:space-y-6 text-center py-10">
            <h3>{{ props.heading}}</h3>
            <div class="w-full md:w-2/3 xl:w-1/2 mx-auto">
                <VNode />
            </div>
            <form>
                <div class="flex flex-wrap justify-center gap-6">
                    <div>
                        <input class="appearance-none block w-full bg-white rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-core-brand-alpha" id="grid-name" type="text" :placeholder="props.placeholderInput1" aria-label="name">
                    </div>
                    <div>
                        <input class="appearance-none block w-full bg-white rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-core-brand-alpha" id="grid-email" type="email" :placeholder="props.placeholderInput2" aria-label="email">
                    </div>
                    <button class="button-primary" type="button">
                        {{ props.buttonText}}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>