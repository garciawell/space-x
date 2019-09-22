import { gql } from 'apollo-boost';

export const GET_DOGS = gql`
  # Write your query or mutation here
  {
    dogs {
      id
      breed
    }
  }
`;
