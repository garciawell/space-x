import { gql } from 'apollo-boost';

export const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
      name
    }
  }
`;
