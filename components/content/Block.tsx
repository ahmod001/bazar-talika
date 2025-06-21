import { View, Text } from 'react-native'
import React from 'react'

const Block = ({ children }: { children?: React.ReactNode }) => {
    return (
        <Text className="text-sm text-gray-700 mb-4">
            {children}
        </Text>
    )
}

export default Block