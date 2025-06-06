import React from 'react';
import { FlatList } from 'react-native';
import ShoppingItem from './Shopping-item/ShoppingItem';
import EmptyList from './EmptyList';
import { ShoppingItemListProps } from './types';
import Gap from './Gap';

const ShoppingItemList = ({ reRender, data, itemComponent, loading }: ShoppingItemListProps) => {

    // if (loading)
    //     return <LoadingScreen />

    if (!loading && data.length === 1)
        return (<EmptyList />)

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
}

ShoppingItemList.Item = ShoppingItem;

export default ShoppingItemList;
