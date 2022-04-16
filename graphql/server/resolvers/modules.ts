import {
  FindManyModuleResolver,
  CreateModuleResolver,
} from "@generated/type-graphql";
import { NonEmptyArray } from "type-graphql";

export const moduleResolvers: NonEmptyArray<any> = [
  FindManyModuleResolver,
  CreateModuleResolver,
];
