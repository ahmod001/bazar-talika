import useRegularShoppingItemDB from "@/services/expo-sqlite/hooks/useRegularShoppingItemDB"

interface Data {
    title: string;
    amount: string;
    is_completed: boolean;
}

const useUpdate = (id: number) => {
    const RegularShoppingItem = useRegularShoppingItemDB()

    const update = async (data: Data) => {
        try {
            await RegularShoppingItem.update(id, data)

            return true
        } catch (error) {
            console.error('update-regular-shopping-item', error);

            return false
        }
    }

    return { update }
}

export default useUpdate