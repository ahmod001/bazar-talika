import { FormValues } from "../hooks/useShopItemForm";

interface Form {
    title: string,
    onSubmit: (data: FormValues) => void
    defaultValue?: FormValues
}

interface ShoppingItemFormDialogProps { visible: boolean; onDismiss: VoidFunction, form: Form, showLoading?: boolean }

export type { ShoppingItemFormDialogProps }