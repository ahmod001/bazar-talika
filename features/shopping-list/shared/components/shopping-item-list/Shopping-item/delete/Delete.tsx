import { View } from 'react-native'
import React from 'react'
import DeleteBtn from './DeleteBtn'
import DeleteConfirmationDialog from '@/components/delete-confirmation-dialog/DeleteConfirmationDialog'
import useDialog from '@/components/delete-confirmation-dialog/useDialog'
import useDelete from './hooks/useDelete'

const Delete = ({ id }: { id: number }) => {
    const { visible, hideDialog, showDialog } = useDialog()

    const { _delete } = useDelete({
        id: id,
        onSuccess: () => {
            hideDialog()
        },
        onError: hideDialog
    })


    const onConfirm = async () => {
        await _delete()
    }

    return (
        <View>
            <DeleteBtn onPress={showDialog} />
            <DeleteConfirmationDialog visible={visible} onDismiss={hideDialog} onConfirm={onConfirm} />
        </View>
    )
}

export default Delete