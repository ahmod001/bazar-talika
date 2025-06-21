import React, { useEffect, useState } from 'react';
import {
    KeyboardAvoidingView as KeyboardAvoid,
    Platform,
    Keyboard,
} from 'react-native';

const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

const KeyboardAvoidingView = ({ children }: { children: React.ReactNode }) => {
    const isKeyboardVisible = useKeyboardVisible();
    const offset = isKeyboardVisible ? 0 : -36;

    return (
        <KeyboardAvoid behavior={behavior} style={{ flex: 1 }} keyboardVerticalOffset={offset}>
            {children}
        </KeyboardAvoid>
    );
};

function useKeyboardVisible() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const show = Keyboard.addListener(
            Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
            () => setVisible(true),
        );
        const hide = Keyboard.addListener(
            Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
            () => setVisible(false),
        );
        return () => {
            show.remove();
            hide.remove();
        };
    }, []);

    return visible;
}


export default KeyboardAvoidingView;