
import React, { createContext } from 'react'
import useShopItemForm, { FormValues } from '../hooks/useShopItemForm'
import { UseFormReturn } from 'react-hook-form'

export const FormContext = createContext<UseFormReturn<any> | undefined>(undefined)

const FormProvider = ({ defaultValues, children }: { defaultValues?: FormValues, children: React.ReactNode }) => {
    const form = useShopItemForm(defaultValues)

    return (
        <FormContext value={form}>
            {children}
        </FormContext>
    )
}

export default FormProvider