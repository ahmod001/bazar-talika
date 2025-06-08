import CreateBtn from './CreateBtn'
import ShoppingItemFormDialog from '@/components/shopping-item-form-dialog/ShoppingItemFormDialog'
import useDialog from '@/components/shopping-item-form-dialog/hooks/useDialog'

const CreateShoppingItem = () => {
    const { visible, showDialog, hideDialog } = useDialog()


    return (
        <>
            <CreateBtn onPress={showDialog} />

            <ShoppingItemFormDialog visible={visible} onDismiss={hideDialog}

                form={{
                    title: 'পন্য যুক্ত করুন',
                    onSubmit: (data) => console.log(data),
                    actionType: 'create'
                }} />
        </>
    )
}
export default CreateShoppingItem