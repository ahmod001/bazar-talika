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
                onDismiss()
            }
        }

        startTransition(fn)
    }

    const onDismiss = () => {
        hideDialog();

        setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                closeMenu()
            });
        }, 200);

    }

    return (
        <>
            <Menu.Item onPress={showDialog} title="সব মুছে ফেলুন" leadingIcon={'delete'} />
            <DeleteConfirmationDialog visible={visible} showLoading={isPending} onDismiss={onDismiss} onConfirm={onConfirm} />
        </>
    );
};

export default DeleteAll;
