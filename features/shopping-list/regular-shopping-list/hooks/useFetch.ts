import { type RegularShoppingItem as _RegularShoppingItem } from '@/db/models/types';
import RegularShoppingItem from '@/db/models/RegularShoppingItem';
import { useState, useTransition, } from 'react';

const useFetch = () => {
    const [isPending, startTransition] = useTransition()
    const [data, setData] = useState<_RegularShoppingItem[]>([])
    const [error, setError] = useState<unknown | null>(null)

    const fetch = () => {
        const fn = async () => {
            try {
                const data = await RegularShoppingItem.all()
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