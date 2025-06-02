import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import ShoppingItem from './Shopping-item/ShoppingItem';



interface _ShoppingItem {
    title: string;
    amount: string;
    isCompleted: boolean;
    [key: string]: any
}

const ShoppingItemList = ({ data }: { data: _ShoppingItem[] }) => {

    const renderItem = useCallback(({ item }: { item: _ShoppingItem }) => (
        <ShoppingItem
            {...item}
        />
    ), []);

    return (
        <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            style={{ paddingBottom: 80 }}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <Gap />}
            ListFooterComponent={() => <Gap size={30} />}
            keyExtractor={(item) => item.id.toString()}

        />
    );
};

const Gap = ({ size = 20 }: { size?: number }) => (
    <View style={{ height: size }} />
)

export default ShoppingItemList;
