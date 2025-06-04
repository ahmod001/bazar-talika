import { create } from 'zustand';

type Store = {
  isReloadRegularShoppingList: boolean;
  toggleReloadRegularShoppingList: () => void;
  setReloadRegularShoppingList: (value: boolean) => void;
};

export const useRegularShoppingItemStore = create<Store>((set) => ({
  isReloadRegularShoppingList: false,

  toggleReloadRegularShoppingList: () =>
    set((state) => ({
      isReloadRegularShoppingList: !state.isReloadRegularShoppingList,
    })),

  setReloadRegularShoppingList: (value: boolean) =>
    set({ isReloadRegularShoppingList: value }),
}));
