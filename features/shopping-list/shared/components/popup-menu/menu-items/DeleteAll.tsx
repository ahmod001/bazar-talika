import DeleteConfirmationDialog from '@/components/delete-confirmation-dialog/DeleteConfirmationDialog';
import useDialog from '@/components/delete-confirmation-dialog/useDialog';
import React, { useTransition } from 'react';
import { InteractionManager } from 'react-native';
import { Menu } from 'react-native-paper';

const DeleteAll = ({ onDelete, closeMenu }: { onDelete: () => Promise<boolean>, [key: string]: any }) => {
    const { visible, hideDialog, showDialog } = useDialog()
    const [isPending, startTransition] = useTransition()

    const onConfirm = () => {

        const fn = async () => {
            const isDeleted = await onDelete()

            if (isDeleted) {
                hideDialog()
            }
        }

        startTransition(fn)
    }

    const onMenuItemPress = () => {
        // closeMenu()

        InteractionManager.runAfterInteractions(() => {
            showDialog();
        });

    }

    return (
        <>
            <Menu.Item onPress={onMenuItemPress} title="সব মুছে ফেলুন" leadingIcon={'delete'} />
            <DeleteConfirmationDialog visible={visible} showLoading={isPending} onDismiss={hideDialog} onConfirm={onConfirm} />
        </>
    );
};

export default DeleteAll;
