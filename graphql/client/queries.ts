import { gql } from "apollo-server-micro";

const getModule = gql`
  query Modules {
    modules {
      id
      name
      type
    }
  }
`;
