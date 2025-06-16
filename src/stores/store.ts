import { create } from 'zustand'

export type modalType = {
  modalState: boolean;
  toggleModal: () => void;
}

export type menuType = {
  menuState: boolean;
  toggleMenu: () => void;
  setMenu: (value: boolean) => void;
}

export const useModalStore = create<modalType>((set) => ({
  modalState: false,
  toggleModal: () => set((state) => ({
    modalState: !state.modalState,
  })),
}));

export const useMenuStore = create<menuType>((set) => ({
  menuState: false,
  toggleMenu: () =>
    set((state) => {
      const newValue = !state.menuState;
      return { menuState: newValue };
    }),
  setMenu: (value: boolean) => {
    //console.log("setMenu:", value);
    set(() => ({
      menuState: value,
    }));
  },
}));