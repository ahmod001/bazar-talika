import useRegularShoppingItemDB from "@/services/expo-sqlite/hooks/useRegularShoppingItemDB";

interface Props { id: number, onError?: VoidFunction, onSuccess?: VoidFunction }

const useDelete = ({ id, onError, onSuccess }: Props) => {

    const { destroy } = useRegularShoppingItemDB()

    const _delete = async () => {
        try {
            await destroy(id)
            onSuccess && onSuccess()

            return true
        } catch (error) {
            console.error(`delete-regular-shopping-item (${id})`, error)
            onError && onError()

            return false
        }
    }

    return { _delete }
};

export default useDelete;