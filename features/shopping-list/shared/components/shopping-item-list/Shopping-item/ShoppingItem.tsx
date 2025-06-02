import colors from '@/theme/colors';
import React, { useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox, { BouncyCheckboxHandle } from 'react-native-bouncy-checkbox';
import { IconButton } from 'react-native-paper';
import useCompletedSound from './hooks/useCompletedSound';
import useChecked from './hooks/useChecked';

interface Props {
    title: string;
    amount: string;
    isCompleted?: boolean;
}

const ShoppingItem = ({ title, amount, isCompleted = false }: Props) => {
    const { checked, toggleCheck } = useChecked(isCompleted)

    const checkboxRef = useRef<BouncyCheckboxHandle>(null);

    const { play } = useCompletedSound()

    const handleCheckbox = () => {
        toggleCheck();
        triggerCheckBoxAnimation()

        if (!checked) {
            play();
        }
    };

    const triggerCheckBoxAnimation = () => {
        checkboxRef.current?.onCheckboxPress()
    }

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={handleCheckbox}
            className={`border-2 border-gray-200 rounded-2xl py-5 px-4 flex flex-row items-center justify-between flex-grow transition-colors duration-100 ${checked && 'bg-primary-light/50'}`}
        >
            <View className="flex flex-row items-center gap-3">
                <CheckBox isChecked={checked} ref={checkboxRef} />
                <Name>{title}</Name>
            </View>

            <Amount>{amount}</Amount>

            <IconButton
                icon="delete"
                size={25}
                onPress={() => null}
                style={{ alignSelf: 'flex-end', }}
            />

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

export default ShoppingItem;
