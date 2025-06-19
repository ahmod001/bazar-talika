import useRegularShoppingItemDB from "@/services/expo-sqlite/hooks/useRegularShoppingItemDB";

interface Props { onError?: VoidFunction, onSuccess?: VoidFunction }

const useDeleteAll = ({ onError, onSuccess }: Props) => {

    const { destroyAll} = useRegularShoppingItemDB()

    const _delete = async () => {
        try {
            await destroyAll()
            onSuccess && onSuccess()

            return true
        } catch (error) {
            console.error(`delete-all-regular-shopping-items`, error)
            onError && onError()

            return false
        }
    }

    return { _delete }
};

export default useDeleteAll;