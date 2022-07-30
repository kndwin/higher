import create from "zustand";
import { useQuery, useMutation } from "urql";
import {
  ModulesDocument,
  CreateModuleDocument,
  UpdateModuleDocument,
  DeleteModuleDocument,
} from "graphql/client/generated";
import type {
  ModulesQuery,
  CreateModuleMutation,
  UpdateModuleMutation,
  DeleteModuleMutation,
  Module,
} from "graphql/client/generated";
import { useSession } from "next-auth/react";

interface State {
  selectedModule: ModulePayload | null;
  setSelectedModule: (module: ModulePayload) => void;
}

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type ModulePayload = Optional<Module, "userId">;

const useStore = create<State>((set) => ({
  selectedModule: null,
  setSelectedModule: (module: ModulePayload) =>
    set((state) => ({ ...state, selectedModule: module })),
}));

export const useModules = () => {
  const { selectedModule, setSelectedModule } = useStore();
  const { data } = useSession();
  const [modulesResult] = useQuery<ModulesQuery>({
    query: ModulesDocument,
    variables: {
      where: {
        userId: {
          equals: data.user.id,
        },
      },
    },
    requestPolicy: "cache-and-network",
  });

  const [createModuleResult, createModule] =
    useMutation<CreateModuleMutation>(CreateModuleDocument);
  const [updateModuleResult, updateModule] =
    useMutation<UpdateModuleMutation>(UpdateModuleDocument);
  const [deleteModuleResult, deleteModule] =
    useMutation<DeleteModuleMutation>(DeleteModuleDocument);

  return {
    modules: (modulesResult.data?.modules as ModulesQuery["modules"]) ?? [],
    modulesResult,
    createModule,
    createModuleResult,
    updateModule,
    updateModuleResult,
    deleteModule,
    deleteModuleResult,
    selectedModule,
    setSelectedModule,
  };
};
