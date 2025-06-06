import useRegularShoppingItemDB from '@/services/expo-sqlite/hooks/useRegularShoppingItemDB';
import { type RegularShoppingItem as _RegularShoppingItem } from '@/services/expo-sqlite/types/regular-shopping-items';
import { useState, useTransition, } from 'react';

const useFetch = () => {
    const { all, create } = useRegularShoppingItemDB()

    const [isPending, startTransition] = useTransition()
    const [data, setData] = useState<_RegularShoppingItem[]>([])
    const [error, setError] = useState<unknown | null>(null)


    const fetch = () => {
        const fn = async () => {
            try {
                const data = await all()
                setData(data as _RegularShoppingItem[])
                // seed(create)
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


const seed = (fn) => {
    console.log('running...');

    for (let index = 0; index < 5; index++) {
        fn({
            title: 'test',
            amount: '1kg',
            is_completed: false
        })

    }
}

export default useFetch;