import create from "zustand";
import { useQuery, useMutation } from "urql";
import {
  FileAttachmentsDocument,
  CreateFileAttachmentDocument,
  UpdateFileAttachmentDocument,
  DeleteFileAttachmentDocument,
} from "graphql/client/generated";
import type {
  FileAttachmentsQuery,
  CreateFileAttachmentMutation,
  UpdateFileAttachmentMutation,
  DeleteFileAttachmentMutation,
  FileAttachment,
} from "graphql/client/generated";
import { useModules } from "./useModules";

interface State {
  selectedFileAttachment: FileAttachment | null;
  setSelectedFileAttachment: (module: FileAttachment) => void;
}

const useStore = create<State>((set) => ({
  selectedFileAttachment: null,
  setSelectedFileAttachment: (module: FileAttachment) =>
    set((state) => ({ ...state, selectedFileAttachment: module })),
}));

export const useFileAttachments = () => {
  const { selectedFileAttachment, setSelectedFileAttachment } = useStore();
  const { selectedModule } = useModules();
  const [fileAttachmentsResult] = useQuery<FileAttachmentsQuery>({
    query: FileAttachmentsDocument,
    variables: {
      where: {
        moduleId: {
          equals: selectedModule?.id,
        },
      },
    },
    requestPolicy: "cache-and-network",
  });

  const [createFileAttachmentResult, createFileAttachment] =
    useMutation<CreateFileAttachmentMutation>(CreateFileAttachmentDocument);
  const [updateFileAttachmentResult, updateFileAttachment] =
    useMutation<UpdateFileAttachmentMutation>(UpdateFileAttachmentDocument);
  const [deleteFileAttachmentResult, deleteFileAttachment] =
    useMutation<DeleteFileAttachmentMutation>(DeleteFileAttachmentDocument);

  return {
    fileAttachmentsResult,
    createFileAttachment,
    createFileAttachmentResult,
    updateFileAttachment,
    updateFileAttachmentResult,
    deleteFileAttachment,
    deleteFileAttachmentResult,
    selectedFileAttachment,
    setSelectedFileAttachment,
  };
};
