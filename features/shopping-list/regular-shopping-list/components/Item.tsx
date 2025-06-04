import React from 'react'
import ShoppingItemList from '../../shared/components/shopping-item-list/ShoppingItemList'
import { useRegularShoppingItemStore } from '@/services/zustand/stores/regular-shopping-item-store'
import useDelete from '../hooks/useDelete'

const Item = (props) => {


    return (
        <ShoppingItemList.Item data={props} onToggleCompleted={(data) => true} >
            <ShoppingItemList.Item.Action>
                <Delete id={props.id} />
            </ShoppingItemList.Item.Action>
        </ShoppingItemList.Item>
    )
}


const Delete = ({ id }: { id: number }) => {
    const { toggleReloadRegularShoppingList } = useRegularShoppingItemStore()

    const { _delete } = useDelete({
        id: id,
        onSuccess: toggleReloadRegularShoppingList
    })

    return (
        <ShoppingItemList.Item.Action.Delete id={id} onDelete={_delete} />
    )
}

export default Item