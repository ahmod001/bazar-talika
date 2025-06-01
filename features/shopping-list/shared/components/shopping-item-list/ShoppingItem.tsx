import { View, Text } from 'react-native'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import colors from '@/theme/colors';

const ShoppingItem = () => {
    const [checked, setChecked] = React.useState(true);
    return (
        <View className='border-2 border-gray-200 rounded-2xl py-5 px-4 flex flex-row items-center justify-between'
            onTouchStart={() => setChecked(!checked)}>
                
            <BouncyCheckbox
                size={32}
                style={{ gap: 8, alignItems: "center", }}
                isChecked={checked}
                fillColor={colors.primary.main}
                 useBuiltInState={false}
                unFillColor="#FFFFFF"
                innerIconStyle={{ borderWidth: 2, borderColor: '#e5e7eb' }}
                textComponent={
                    <Name>পেয়াজ</Name>}
            />


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