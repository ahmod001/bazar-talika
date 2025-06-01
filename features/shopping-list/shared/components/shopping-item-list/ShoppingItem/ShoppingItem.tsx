import { View, } from 'react-native'
import React from 'react'
import Item from './Item'
import { IconButton } from 'react-native-paper'

// interface Props {
//     title: string;
//     amount: string;
//     isCompleted?: boolean;
// }
const ShoppingItem = () => {
    return (
        <View className='flex flex-row gap-0'>
            <Item title='আলু' amount="১০ কেজি" isCompleted={false} />
{/* 
            <IconButton
                icon="delete"
                size={25}
                onPress={() => console.log('Add Item')}
                style={{ alignSelf: 'center',  }} 
                /> */}
        </View>
    )
}

export default ShoppingItem