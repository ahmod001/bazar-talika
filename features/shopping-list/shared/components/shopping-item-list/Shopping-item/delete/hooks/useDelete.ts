import RegularShoppingItem from '@/db/models/RegularShoppingItem';

interface Props { id: number, onError: VoidFunction, onSuccess: VoidFunction }

const useDelete = ({ id, onError, onSuccess }: Props) => {

    const _delete = async () => {
        try {
            await RegularShoppingItem.destroy(id)
            onSuccess()
        } catch (error) {
            console.error(`delete-regular-shopping-item (${id})`, error)
            onError()
        }
    }


    return { _delete }
};

export default useDelete;