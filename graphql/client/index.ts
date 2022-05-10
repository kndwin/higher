import { createClient } from "urql";

export const client = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_URL,
});
