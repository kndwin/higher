import { cacheExchange } from "@urql/exchange-graphcache";
import { createClient, dedupExchange, fetchExchange, gql } from "urql";

export const client = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          // TODO(knd): Works but refetches every query in existance
          // Not great, but for now it's okay (do more investigation on
          // https://formidable.com/open-source/urql/docs/graphcache/cache-updates/#invalidating-entities

          deleteOneModule: (result, args, cache, _info) => {
            cache.invalidate({ __typename: "Query" });
          },
          createOneModule: (_result, args, cache, _info) => {
            cache.invalidate({ __typename: "Query" });
          },
        },
      },
    }),
    fetchExchange,
  ],
});
