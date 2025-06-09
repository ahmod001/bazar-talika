import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    title: yup.string().required('পন্যের নাম দিতে হবে'),
    amount: yup.string().required('পন্যের পরিমান দিতে হবে')
})

interface DefaultFormValues { title: string, amount: string }

const useShopItemForm = (defaultValues?: DefaultFormValues) => {
    const form = useForm({
        mode: 'onBlur',
        defaultValues: defaultValues,
        resolver: yupResolver(schema)
    })

    return form;
}


export type { DefaultFormValues as FormValues }

export default useShopItemForm