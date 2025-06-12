import React from 'react';
import {
    KeyboardAvoidingView as KeyboardAvoid,
    StyleSheet,
    Platform,
} from 'react-native';



const KeyboardAvoidingView = ({ children }: { children: React.ReactNode }) => {
    return (
        <KeyboardAvoid
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
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