import useRegularShoppingItemDB from "@/services/expo-sqlite/hooks/useRegularShoppingItemDB"
import useRegularShoppingList from "./useRegularShoppingList";

interface Data {
    title: string;
    amount: string;
    is_completed: boolean;
}
const useCreate = () => {
    const RegularShoppingItem = useRegularShoppingItemDB()
    const { reload } = useRegularShoppingList()

    const create = async (data: Data) => {
        try {
            await RegularShoppingItem.create(data)
            reload()
        } catch (error) {
            console.error('create-regular-shopping-item', error);

        }
    }

    return { create }
}

export default useCreate