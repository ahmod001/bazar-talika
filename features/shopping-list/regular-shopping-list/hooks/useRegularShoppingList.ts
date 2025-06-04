import { useRegularShoppingItemStore } from "@/services/zustand/stores/regular-shopping-item-store";

const useRegularShoppingList = () => {
    const reload = useRegularShoppingItemStore(state => state.toggleReloadRegularShoppingList)

    return { reload }
};

export default useRegularShoppingList;