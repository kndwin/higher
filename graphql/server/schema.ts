import { buildSchemaSync } from "type-graphql";
import { moduleResolvers } from "./resolvers/modules";

export const schema = buildSchemaSync({
  resolvers: [...moduleResolvers],
  validate: false,
});
