import { View } from 'react-native'
import React from 'react'
import DeleteBtn from './DeleteBtn'
import DeleteConfirmationDialog from '@/components/delete-confirmation-dialog/DeleteConfirmationDialog'
import useDialog from '@/components/delete-confirmation-dialog/useDialog'

const Delete = () => {
    const { visible, hideDialog, showDialog } = useDialog()
    const handleDelete = () => {
        hideDialog()
    }
    return (
        <View>
            <DeleteBtn onPress={showDialog} />
            <DeleteConfirmationDialog visible={visible} onDismiss={hideDialog} onConfirm={handleDelete} />
        </View>
    )
}

export default Delete