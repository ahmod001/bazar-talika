import { View, Text } from 'react-native'
import React from 'react'
import { Checkbox } from 'react-native-paper'

const ShoppingItem = () => {
    const [checked, setChecked] = React.useState(true);
    return (
        <View className='border-2 border-gray-200 rounded-2xl p-4 flex flex-row items-center justify-between '
            onTouchEnd={() => setChecked(!checked)}>
            <View className='flex flex-row items-center gap-2'>
                <View className='scale-110'>
                    <Checkbox status={checked ? "checked" : "unchecked"} />
                </View>

                <Name>
                    পেয়াজ
                </Name>
            </View>

            <View>
                <Amount>
                    ১ কেজি
                </Amount>
            </View>

        </View>
    )
}



const Name = ({ children }: { children: React.ReactNode }) => (
    <Text numberOfLines={1} style={{ fontSize: 17 }} className='font-bold text-secondary-dark'>{children}</Text>
)

const Amount = ({ children }: { children: React.ReactNode }) => (
    <Text numberOfLines={1} style={{ fontSize: 17 }} className=' font-semibold text-secondary'>{children}</Text>
)

export default ShoppingItem