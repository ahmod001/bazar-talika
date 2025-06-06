import colors from '@/theme/colors'
import React from 'react'
import { AnimatedFAB } from 'react-native-paper'

const DialogTrigger = ({ onPress }: { onPress?: VoidFunction }) => {
    return (
        <AnimatedFAB
            icon={'plus'}
            label={'যোগ করুন'}
            color={colors.primary.light}
            style={{ backgroundColor: colors.primary.main, margin: 16 }}
            className='absolute bottom-0 right-0'

            extended={false}
            onPress={onPress}
            visible={true}
            animateFrom={'right'}

        />
    )
}

export default DialogTrigger