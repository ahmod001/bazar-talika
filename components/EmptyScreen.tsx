import { View, Text } from 'react-native'
import React from 'react'
import { Icon as PaperIcon } from 'react-native-paper'


const EmptyScreen = ({ children }: { children: React.ReactNode }) => {
    return (
        <View className='flex flex-col justify-center items-center h-5/6 container'>
            {children}
        </View>
    )
}


const Icon = ({ name = 'format-list-bulleted' }) => (
    <PaperIcon source={name} size={70} color={'#d1d5db'} />
)

const Message = ({ children }: { children: React.ReactNode }) => (
    <Text className='text-lg text-center text-gray-400 mt-2'>{children}</Text>
)



EmptyScreen.Icon = Icon;
EmptyScreen.Message = Message;



export default EmptyScreen