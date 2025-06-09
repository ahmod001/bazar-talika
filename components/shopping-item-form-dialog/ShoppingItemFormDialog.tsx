import colors from '@/theme/colors';
import * as React from 'react';
import { Button, Dialog, Portal } from 'react-native-paper';
import Cancel from './actions/Cancel';
import Submit from './actions/Submit';
import Form from './Form';

interface Form {
    title: string,
    onSubmit: (data: Object) => void
    actionType?: 'create' | 'update'
}

interface Props { visible: boolean; onDismiss: VoidFunction, form: Form, showLoading?: boolean }

const ShoppingItemFormDialog = ({ form, visible, onDismiss, showLoading }: Props) => {

    const handleSubmit = () => {
        form.onSubmit({
            /* any data */
        })
    }

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={onDismiss} >
                <Dialog.Title>
                    {form.title}
                </Dialog.Title>
                <Dialog.Content style={{ marginTop: 20 }}>
                    <Form />
                </Dialog.Content>

                <Dialog.Actions >
                    <Cancel onPress={onDismiss} />
                    <Submit onPress={handleSubmit} loading={showLoading} />
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};



export default ShoppingItemFormDialog;