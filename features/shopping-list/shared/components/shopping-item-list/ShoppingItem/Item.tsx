import colors from '@/theme/colors';
import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox, { BouncyCheckboxHandle } from 'react-native-bouncy-checkbox';
import { IconButton } from 'react-native-paper';

interface Props {
    title: string;
    amount: string;
    isCompleted?: boolean;
}

const Item = ({ title, amount, isCompleted = false }: Props) => {
    const [checked, setChecked] = useState<boolean>(isCompleted);
    const checkboxRef = useRef<BouncyCheckboxHandle>(null);

    const handleToggle = () => {
        setChecked(prev => !prev);
        checkboxRef.current?.onCheckboxPress();
    };

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={handleToggle}
            className="border-2 border-gray-200 rounded-2xl py-5 px-4 flex flex-row items-center justify-between flex-grow"
        >
            <View className="flex flex-row items-center gap-3">
                <CheckBox isChecked={checked} ref={checkboxRef} />
                <Name>{title}</Name>
            </View>

            <Amount>{amount}</Amount>

            <IconButton
                icon="delete"
                size={25}
                onPress={() => console.log('Add Item')}
                style={{ alignSelf: 'flex-end',  }} 
                />

            {/* <View className="flex flex-row items-center gap-2">
                <Amount>{amount}</Amount>
                <IconButton
                    icon="delete"
                    size={25}
                    onPress={() => console.log('Delete Item')}
                    style={{ alignSelf: 'center' }}
                />
            </View> */}
        </TouchableOpacity>
    );
};

const CheckBox = React.forwardRef<BouncyCheckboxHandle, { isChecked: boolean }>(
    ({ isChecked }, ref) => (
        <BouncyCheckbox
            ref={ref}
            size={32}
            isChecked={isChecked}
            fillColor={colors.primary.main}
            useBuiltInState={false}
            disableText
            bounceEffect={0.1}
            unFillColor="#FFFFFF"
            innerIconStyle={{ borderWidth: 2, borderColor: '#e5e7eb' }}
        />
    )
);

CheckBox.displayName = 'CheckBox';


const Name = ({ children }: { children: React.ReactNode }) => (
    <Text numberOfLines={1} style={{ fontSize: 17 }} className="font-bold text-secondary-dark">
        {children}
    </Text>
);

const Amount = ({ children }: { children: React.ReactNode }) => (
    <Text numberOfLines={1} style={{ fontSize: 17 }} className="font-semibold text-secondary">
        {children}
    </Text>
);

export default Item;
