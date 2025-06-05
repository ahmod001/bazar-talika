import colors from '@/theme/colors';
import React, { ReactNode, useRef } from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import BouncyCheckbox, { BouncyCheckboxHandle } from 'react-native-bouncy-checkbox';
import useCompletedSound from './hooks/useCompletedSound';
import useChecked from './hooks/useChecked';
import Action from './action/Action';

interface Data {
    id: number,
    title: string;
    amount: string;
    is_completed: boolean;
}

interface Props {
    onToggleCompleted: (data: Data) => Promise<boolean>
    data: Data,
    children: ReactNode
}

const ShoppingItem = ({ data, onToggleCompleted, children }: Props) => {
    const { checked, toggleCheck } = useChecked(data.is_completed)

    const checkboxRef = useRef<BouncyCheckboxHandle>(null);

    const { play } = useCompletedSound()

    const handleCheckbox = async () => {
        toggleCheck();
        triggerCheckBoxAnimation()

        if (!checked) {
            play();
        }

        const isUpdated = await onToggleCompleted({ ...data, is_completed: !checked })

        if (!isUpdated) toggleCheck();
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
                <Name>{data.title}</Name>
            </View>

            <Amount>{data.amount}</Amount>

            {children}
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

ShoppingItem.displayName = 'Name'


const Amount = ({ children }: { children: React.ReactNode }) => (
    <Text numberOfLines={1} style={{ fontSize: 17 }} className="font-semibold text-secondary">
        {children}
    </Text>
);

ShoppingItem.displayName = 'Amount'




ShoppingItem.Action = Action;


export default ShoppingItem;
