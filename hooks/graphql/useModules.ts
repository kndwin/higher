import { useQuery, useMutation } from "urql";
import {
  GetModulesDocument,
  CreateModuleDocument,
} from "graphql/client/generated";
import type {
  GetModulesQuery,
  CreateModuleMutation,
} from "graphql/client/generated";

export const useModules = () => {
  const [modules] = useQuery<GetModulesQuery>({
    query: GetModulesDocument,
		requestPolicy: 'cache-and-network'
  });
  const [createModuleResult, createModule] =
    useMutation<CreateModuleMutation>(CreateModuleDocument);

  return {
    modules: modules.data?.modules,
    createModule,
		createModuleResult
  };
};
