import React from 'react'
import { View } from 'react-native'
import { HelperText, TextInput, TextInputProps } from 'react-native-paper'

const TextField = ({ error, ...props }: TextInputProps & { error?: string }) => {
    const isError = !!error
    return (
        <View>
            <Filed
                error={isError}
                {...props}
            />

            <Error visible={isError}>
                {error}
            </Error>
        </View>
    )
}

const Filed = ({ ...props }: TextInputProps) => (
    <TextInput
        mode='outlined'
        placeholderTextColor={'gray'}
        {...props}
    />
)
TextField.displayName = 'Filed';



const Error = ({ visible, children }: { visible?: boolean, children: React.ReactNode }) => (
    <HelperText type="error" visible={visible}>
        {children}
    </HelperText>
)
TextField.displayName = 'Error';
export default TextField