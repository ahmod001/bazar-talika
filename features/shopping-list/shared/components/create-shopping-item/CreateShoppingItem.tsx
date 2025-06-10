import CreateBtn from './CreateBtn'
import ShoppingItemFormDialog from '@/components/shopping-item-form-dialog/ShoppingItemFormDialog'
import useDialog from '@/components/shopping-item-form-dialog/hooks/useDialog'

interface Props {
    onCreate: (data: any) => Promise<any>
}
const CreateShoppingItem = ({ onCreate }: Props) => {
    const { visible, showDialog, hideDialog } = useDialog()

    const onSubmit = async (data: any) => {
        await onCreate({
            ...data,
            is_completed: false,
        })

        hideDialog()
    }

    return (
        <>
            <CreateBtn onPress={showDialog} />

            <ShoppingItemFormDialog visible={visible} onDismiss={hideDialog}

                form={{
                    title: 'পন্য যুক্ত করুন',
                    onSubmit: onSubmit,
                }} />
        </>
    )
}
export default CreateShoppingItem