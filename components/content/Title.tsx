import { Text } from 'react-native'
import React from 'react'

const Title = ({ children }: { children?: React.ReactNode }) => {
    return (
        <Text className="text-lg font-semibold mb-2 text-black">
            {children}
        </Text>
    )
}

export default Title