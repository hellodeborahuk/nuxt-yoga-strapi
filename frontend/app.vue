<script setup>
  import {siteSettingsQuery} from './graphql/queries';
  const {data} = await useAsyncQuery(siteSettingsQuery);
  const colours = data.value?.siteSetting?.data?.attributes?.colourTheme ?? []
  let styles = '';
  for(const colour of colours){
    const {variableName, variableValue} = colour
    styles += `--${variableName}: ${variableValue};`
  }

  useHead({
    style: [
      `:root {${styles}}`
    ]
  })
</script>

<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>