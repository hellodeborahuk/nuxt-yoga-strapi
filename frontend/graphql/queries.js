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
          comments {
            data {
              attributes {
                name
                message
              }
            }
          }
        }
      }
    }
  }`

  export const singlePageQuery = gql`
  query singlePageQuery($slug:String) {
    pages(filters:{slug:{eq:$slug}}) {
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
              ...on ComponentClassBookingForm {
                heading
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
             ... on ComponentContentNewsletter  {
                heading
                copy
                placeholderInput1
                placeholderInput2
                buttonText
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
            ...on ComponentContactContactForm{
                heading
                copy
                labelValue1
                labelValue2
                labelValue3
                buttonText
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
          colourTheme {
            variableName
            variableValue
          }
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

  export const bookingQuery = gql`
  query bookingQuery {
    booking(id:1) {
      data {
        attributes {
          __typename
          ...on Booking {
            booking {
              availability
              timeDate
              location
              buttonText
              price
              class {
                data {
                  attributes {
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  }`