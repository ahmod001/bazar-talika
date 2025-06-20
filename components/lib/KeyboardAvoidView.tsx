import React from 'react';
import {
    KeyboardAvoidingView as KeyboardAvoid,
    StyleSheet,
    Platform,
} from 'react-native';

const behavior = Platform.OS === 'ios' ? 'padding' : 'height'
const verticalOffset = Platform.OS === 'ios' ? 60 : 0;

const KeyboardAvoidingView = ({ children }: { children: React.ReactNode }) => {

    return (
        <KeyboardAvoid
            behavior={behavior} style={styles.container} keyboardVerticalOffset={verticalOffset}>
            {children}
        </KeyboardAvoid>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});


export default KeyboardAvoidingView;