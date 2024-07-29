import { create } from "zustand";

const useStore = create((set) => ({
  username: "",
  setUsername: (newusername) => set({ username: newusername }),
  data: {},
  updateData: (newData) => {
    console.log("Zustand: ", typeof newData);
    set({ data: newData });
  },
  removeAll: () => set({ username: "", data: {} }),
}));

export default useStore;
