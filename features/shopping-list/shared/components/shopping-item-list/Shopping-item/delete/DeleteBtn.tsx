import React from 'react'
import { IconButton } from 'react-native-paper'

const DeleteBtn = ({ onPress }: { onPress: VoidFunction }) => {
    return (
        <IconButton
            icon="delete"
            size={25}
            onPress={onPress}
            style={{ alignSelf: 'flex-end', }}
        />
    )
}

export default DeleteBtn