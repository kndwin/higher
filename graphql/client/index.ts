import { createClient } from "urql";

export const client = createClient({
  url: `${process.env.BASE_URL}/api/graphql`,
});
