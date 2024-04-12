<script lang="ts" setup>

const props = defineProps(['classes'])

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 my-10 container">
        <Class v-for="c in classes.class" :attributes="c" />
    </div>
</template>