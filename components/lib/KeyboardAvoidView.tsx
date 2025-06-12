import React from 'react';
import {
    KeyboardAvoidingView as KeyboardAvoid,
    StyleSheet,
    Platform,
} from 'react-native';



const KeyboardAvoidingView = ({ children }: { children: React.ReactNode }) => {

    return (
        <KeyboardAvoid
            behavior={getBehavior()} style={styles.container}>
            {children}
        </KeyboardAvoid>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

const getBehavior = () => Platform.OS === 'ios' ? 'padding' : 'height';


export default KeyboardAvoidingView;