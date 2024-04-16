import gql from 'graphql-tag'

export const allArticlesQuery = gql`
query allArticlesQuery {
    articles {
      data {
        id
        attributes {
          title
          slug
          excerpt
          featuredImage {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          body
        }
      }
    }
  }`

export const singleArticleQuery = gql`
query singleArticleQuery($id: ID!) {
    article(id: $id) {
      data {
        id
        attributes {
          title
          slug
          featuredImage {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
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
              ...on ComponentClassesClasses {
                class {
                  description
                  title
                  backgroundColour
                  icon {
                    data {
                      attributes {
                        url
                        alternativeText
                      }
                    }
                  }
                }
              }
              ...on ComponentContentTextAndImageBlock {
                copy
                image {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
              ...on ComponentContentImageGrid {
                images{
                 data {
                   attributes {
                     url
                     alternativeText
                   }   
               }
               }
             }
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
  }
  `
  export const siteSettingsQuery = gql`
  query {
    siteSetting {
      data {
        attributes {
          logo {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }`