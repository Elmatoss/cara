import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
  query articles {
    articles {
      Title
      Description
      Content
      Slug
      published_at
      id
      categories {
        Name
        id
      }
      Thumbnail {
        formats
      }
      author {
        Name
        Image {
          formats
        }
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query products {
    products {
      id
      Name
      Description
      Gallery {
        formats
      }
      Price
    }
  }
`;

export const GET_CATEGORIES = gql`
  query categories {
    categories {
      Name
      id
    }
  }
`;
