import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPostsList {
    publications {
      titre
      couverture
      id
      categorie
      description
      dateDePublication
      club {
        clubId
      }
    }
  }
`;
