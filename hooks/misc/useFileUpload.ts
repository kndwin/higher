import create from "zustand";

interface State {
  state: "ready" | "loading" | "error";
  setState: (state: "ready" | "loading" | "error") => void;
}
const useStore = create<State>((set) => ({
  state: "ready",
  setState: (state: "ready" | "loading" | "error") => set({ state }),
}));

export const useFileUpload = () => {
  const { state, setState } = useStore();
  const uploadFile = async ({
    file,
    type = "auto",
  }: {
    file: File;
    type?: "image" | "video" | "raw" | "auto";
  }) => {
    const data = new FormData();
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    setState("loading");
    data.append("file", file);
    data.append("upload_preset", uploadPreset);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/${type}/upload`,
      {
        method: "POST",
        body: data,
      }
    ).then((res) => res.json());
    setState("ready");

    return res?.secure_url;
  };
  return {
    uploadFile,
    state,
  };
};
