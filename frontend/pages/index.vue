<template>
  <div>
    <h2>hello world</h2>
    <div v-for="article in articles" :key="article.id">
      <h2>{{ article.title }}</h2>
      <p> {{ article.author }}</p>
    </div>
  </div>
</template>

<script>
import { allArticlesQuery } from '~/graphql/queries'
export default {
  data () {
    return {
      articles: []
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: allArticlesQuery
    }
  }
}
</script>
