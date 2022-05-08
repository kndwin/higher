import create from "zustand";

interface ToastData {
  durationInMs?: number;
  title: string;
  description: string;
  color: "success" | "error";
  action?: {
    label: string;
    onClick: () => void;
  } | null;
  close?: boolean;
}
interface State {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: ToastData;
  setData: (data: ToastData) => void;
}

const useStore = create<State>((set) => ({
  open: false,
  setOpen: (open: boolean) => set((state) => ({ ...state, open })),
  data: {
    durationInMs: 3_000,
    title: "Success!",
    description: "This is a success message",
    color: "success",
    action: {
      label: "Close",
      onClick: () => {},
    },
    close: false,
  },
  setData: (data: ToastData) => set((state) => ({ ...state, data })),
}));

export const useToast = () => {
  const { open, setOpen, data, setData } = useStore();
  const setToast = (newData: ToastData) => {
    setOpen(false);
    setData({ ...data, ...newData });
    setOpen(true);
  };
  return {
    open,
    setOpen,
    data,
    setToast,
  };
};
