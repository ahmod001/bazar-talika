import colors from '@/theme/colors'
import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { IconButton } from 'react-native-paper'

const TriggerMenu = ({ onPress }: { onPress: VoidFunction }) => (
    <IconButton

        onPress={onPress}
        mode='contained'
        icon={() => (<Entypo name="dots-three-horizontal" size={20} color={colors.primary.main} />)}
        iconColor={colors.primary.main}
        style={{ backgroundColor: colors.primary.light }}
    />
)

export default TriggerMenu