import {
  ModuleCrudResolver,
  FindManyModuleResolver,
} from "@generated/type-graphql";
import { NonEmptyArray } from "type-graphql";

export const moduleResolvers: NonEmptyArray<any> = [
  ModuleCrudResolver,
  FindManyModuleResolver,
];
