import create from "zustand";
import { nanoid } from "nanoid";
import type {
  TreeItem,
  TreeItems,
  FlattenedItem,
} from "components/shared/navigation/FileTree/types";
import type { IHighlight } from "components/shared/pdf/types";

interface State {
  selectedFile: TreeItem | null;
  setSelectedFile: (file: TreeItem) => void;
  files: TreeItems;
  setFiles: (files: TreeItems) => void;
  highlights: IHighlight[];
  setHighlights: (highlights: IHighlight[]) => void;
  setHighlightsPrev: (fn: (prev: IHighlight[]) => IHighlight[]) => void;
}
const initialFiles: TreeItems = [
  {
    id: nanoid(),
    label: "New Folder",
    type: "folder",
    children: [],
  },
];

export const useStore = create<State>((set) => ({
  selectedFile: null,
  setSelectedFile: (selectedFile) =>
    set((state) => ({ ...state, selectedFile })),
  files: initialFiles,
  setFiles: (files) => set((state) => ({ ...state, files })),
  highlights: [],
  setHighlights: (highlights) => set((state) => ({ ...state, highlights })),
  setHighlightsPrev: (fn: (prev: IHighlight[]) => IHighlight[]) => {
    set((state) => ({ ...state, highlights: fn(state.highlights) }));
  },
}));

export const useFiles = () => {
  const {
    files,
    setFiles,
    selectedFile,
    setSelectedFile,
    highlights,
    setHighlights,
    setHighlightsPrev,
  } = useStore();

  const newFolder: FlattenedItem = {
    id: nanoid(),
    label: "New folder",
    children: [],
    type: "folder",
    depth: 0,
    parentId: null,
    index: 0,
  };

  return {
    files,
    setFiles,
    selectedFile,
    setSelectedFile,
    highlights,
    setHighlights,
    setHighlightsPrev,
    newFolder,
  };
};
