import colors from '@/theme/colors';
import * as React from 'react';
import { Button, Dialog, Portal, Text } from 'react-native-paper';

interface Props { visible: boolean; onDismiss: VoidFunction, onConfirm: VoidFunction, warning?: string }


const DeleteConfirmationDialog = ({ visible, onDismiss, onConfirm, warning }: Props) => {
    return (
        <Portal>
            <Dialog visible={visible} onDismiss={onDismiss} >
                <Dialog.Icon icon="delete" size={40} />

                <Dialog.Content style={{ marginTop: 20 }}>
                    <Text variant="titleSmall" style={{ textAlign: 'center', color: colors.secondary.dark }}>{warning?? 'আপনি কি নিশ্চিতভাবে এই পণ্যটি মুছে ফেলতে চান?'}</Text>
                </Dialog.Content>

                <Dialog.Actions >
                    <Cancel onPress={onDismiss} />
                    <Delete onPress={onConfirm} />
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};

const Cancel = ({ onPress }: { onPress?: VoidFunction }) => (
    <Button onPress={onPress} mode='text' textColor={colors.secondary.dark} style={{ borderColor: colors.secondary.main, }}>
        বাতিল
    </Button>
)

const Delete = ({ onPress }: { onPress?: VoidFunction }) => (
    <Button onPress={onPress} mode='contained' style={{ borderColor: colors.secondary.main, backgroundColor: colors.danger.main, marginStart: 8 }}>
        মুছে ফেলুন
    </Button>
)

export default DeleteConfirmationDialog;