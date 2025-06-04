import useRegularShoppingItemDB from '@/services/expo-sqlite/hooks/useRegularShoppingItemDB';
import { type RegularShoppingItem as _RegularShoppingItem } from '@/services/expo-sqlite/types/regular-shopping-items';
import { useState, useTransition, } from 'react';

const useFetch = () => {
    const { all } = useRegularShoppingItemDB()

    const [isPending, startTransition] = useTransition()
    const [data, setData] = useState<_RegularShoppingItem[]>([])
    const [error, setError] = useState<unknown | null>(null)



    const fetch = () => {
        const fn = async () => {
            try {
                const data = await all()
                setData(data as _RegularShoppingItem[])
            } catch (error) {
                console.error('regular-shopping-list', error)
                setError(error)
            }
        }

        startTransition(fn)
    }


    return {
        fetch,
        data,
        isLoading: isPending,
        error
    }
};

export default useFetch;