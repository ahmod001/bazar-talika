import useRegularShoppingItemDB from "@/services/expo-sqlite/hooks/useRegularShoppingItemDB"
import useFetch from "./useFetch"
import { shoppingListInTextFormatted } from "@/utils/shoppingListInTextFormatted"

const useRegularShoppingListInText = () => {

    const { all } = useRegularShoppingItemDB();

    const fetchRegularShoppingItems = async () => {
        try {
            const data = await all()
            return data;
        } catch (error) {
            console.error('regular-shopping-list', error)
            return [];
        }
    }

    const txt = async () => {
        const data = await fetchRegularShoppingItems()
        return shoppingListInTextFormatted(data as any, 'বাজার তালিকা')
    }

    return { txt }
}

export default useRegularShoppingListInText