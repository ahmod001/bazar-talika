import { View } from 'react-native'
import React, { useTransition } from 'react'
import DeleteBtn from './DeleteBtn'
import DeleteConfirmationDialog from '@/components/delete-confirmation-dialog/DeleteConfirmationDialog'
import useDialog from '@/components/delete-confirmation-dialog/useDialog'

interface Props {
    id: number,
    onDelete: (id: number) => Promise<boolean>
}

const Delete = ({ id, onDelete }: Props) => {
    const { visible, hideDialog, showDialog } = useDialog()
    const [isPending, startTransition] = useTransition()

    const onConfirm = () => {
        const fn = async () => {
            const isDeleted = await onDelete(id)

            if (isDeleted) {
                hideDialog()
            }
        }
        
        startTransition(fn)
    }


    return (
        <View>
            <DeleteBtn onPress={showDialog} />
            <DeleteConfirmationDialog visible={visible} showLoading={isPending} onDismiss={hideDialog} onConfirm={onConfirm} />
        </View>
    )
}

export default Delete