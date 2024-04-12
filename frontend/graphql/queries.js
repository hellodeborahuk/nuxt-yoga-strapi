import gql from 'graphql-tag'

export const allArticlesQuery = gql`
query allArticlesQuery {
    articles {
      data {
        id
        attributes {
          title
          slug
          author
          body
        }
      }
    }
  }`

export const singleArticleQuery = gql`
query singleArticleQuery {
    article(id: 1) {
      data {
        id
        attributes {
          title
          slug
          author
          body
        }
      }
    }
  }`

  export const singlePageQuery = gql`
  query singlePageQuery {
    page(id:1) {
      data {
        attributes {
          title
          slug
            segments {
            __typename
              ...on ComponentHeroHero {
                image { 
                  data {
                  attributes {
                    url
                    alternativeText
                  }
                  }
                }
                price
                description
              }
            }
        }
      }
    }
  }`
  