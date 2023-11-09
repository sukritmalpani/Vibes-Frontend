import { create } from "zustand";
export type ModalType = "createPlaylist";
export const useModal = create((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type: any, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
