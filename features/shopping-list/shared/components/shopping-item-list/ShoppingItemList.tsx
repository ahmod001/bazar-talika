import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import ShoppingItem from './Shopping-item/ShoppingItem';


interface ShoppingItemType {
    title: string;
    amount: string;
    is_completed: boolean;
    [key: string]: any
}


interface Props {
    data: ShoppingItemType[],

}

const ShoppingItemList = ({ data}: Props) => {

    const renderItem = useCallback(({ item }: { item: ShoppingItemType }) => (
        <ShoppingItem
            isCompleted={item.is_complete}
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
