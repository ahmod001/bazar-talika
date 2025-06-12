import * as React from 'react';
import { Dialog, Portal } from 'react-native-paper';
import Cancel from './actions/Cancel';
import Submit from './actions/Submit';
import Form from './Form';
import FormProvider from './providers/FormProvider';
import { ShoppingItemFormDialogProps } from './types';
import useFormProvider from './hooks/useFormProvider';
import KeyboardAvoidingView from '../lib/KeyboardAvoidView';


const ShoppingItemFormDialog_ = ({ form, visible, onDismiss, showLoading }: ShoppingItemFormDialogProps) => {
    const { handleSubmit, reset } = useFormProvider()

    React.useEffect(() => {
        reset()
    }, [visible])

    return (
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
    );
};

const Wrapper = (props: ShoppingItemFormDialogProps) => (
    <Portal>
        <FormProvider defaultValues={props.form?.defaultValue}>
            <KeyboardAvoidingView>
                <ShoppingItemFormDialog_ {...props} />
            </KeyboardAvoidingView>
        </FormProvider>
    </Portal>
)

const ShoppingItemFormDialog = Wrapper


export default ShoppingItemFormDialog;