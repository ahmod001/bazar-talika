import { View } from 'react-native'
import React from 'react'
import colors from '@/theme/colors'
import { ActivityIndicator } from 'react-native-paper'

const LoadingScreen = () => {
    return (
        <View className='h-full flex items-center justify-center'>
            <ActivityIndicator animating={true} size={'large'} color={colors.primary.main} />
        </View>
    )
}

export default LoadingScreen