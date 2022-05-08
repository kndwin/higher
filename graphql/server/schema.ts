import { buildSchemaSync } from "type-graphql";
import { moduleResolvers } from "./resolvers/modules";
import { fileAttachmentResolvers } from "./resolvers/fileAttachments";

export const schema = buildSchemaSync({
  resolvers: [...moduleResolvers, ...fileAttachmentResolvers],
  validate: false,
});
