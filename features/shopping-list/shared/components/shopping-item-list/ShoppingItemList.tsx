import React from 'react';
import { FlatList, View } from 'react-native';
import ShoppingItem from './Shopping-item/ShoppingItem';

interface ShoppingItemType {
    id: number;
    title: string;
    amount: string;
    is_completed: boolean;
    [key: string]: any;
}

type ItemComponent = (props: { item: ShoppingItemType; index: number }) => React.ReactElement

interface Props {
    reRender?: boolean;
    data: ShoppingItemType[];
    itemComponent: ItemComponent;
}

const ShoppingItemList = ({ reRender, data, itemComponent }: Props) => {
    return (
        <FlatList
            data={data}
            extraData={reRender}
            showsVerticalScrollIndicator={false}
            style={{ paddingBottom: 80 }}
            renderItem={itemComponent}
            ItemSeparatorComponent={() => <Gap />}
            ListFooterComponent={() => <Gap size={30} />}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

const Gap = ({ size = 20 }: { size?: number }) => <View style={{ height: size }} />;

ShoppingItemList.Item = ShoppingItem;
export type {ItemComponent}
export default ShoppingItemList;
