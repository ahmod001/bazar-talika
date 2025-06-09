import * as React from 'react';
import { Dialog, Portal } from 'react-native-paper';
import Cancel from './actions/Cancel';
import Submit from './actions/Submit';
import Form from './Form';
import FormProvider from './providers/FormProvider';
import { ShoppingItemFormDialogProps } from './types';
import useFormProvider from './hooks/useFormProvider';


const ShoppingItemFormDialog_ = ({ form, visible, onDismiss, showLoading }: ShoppingItemFormDialogProps) => {
    const { handleSubmit } = useFormProvider()

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
                    <Submit onPress={handleSubmit(form.onSubmit)} loading={showLoading} />
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};

const Wrapper = (props: ShoppingItemFormDialogProps) => (
    <FormProvider defaultValues={props.form?.defaultValue}>
        <ShoppingItemFormDialog_ {...props} />
    </FormProvider>
)

const ShoppingItemFormDialog = Wrapper

export default ShoppingItemFormDialog;