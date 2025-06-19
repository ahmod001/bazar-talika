import React from 'react'
import PopupMenu from '../../shared/components/popup-menu/Menu'
import useDeleteAll from '../hooks/useDeleteAll'
import useRegularShoppingList from '../hooks/useRegularShoppingList'
import useShare from '@/hooks/useShare'
import useRegularShoppingListInText from '../hooks/useRegularShoppingListInText'

const TabMenu = ({ ...props }: { [key: string]: any }) => {
    const { share } = useShare()
    const { txt } = useRegularShoppingListInText();

    const { reload } = useRegularShoppingList()
    const { _delete } = useDeleteAll({
        onSuccess: reload
    })


    const onShare = () => {
        const text = txt()
        share(text)
    }

    return (
        <PopupMenu {...props} >
            <PopupMenu.items.DeleteAll onDelete={_delete} />
            <PopupMenu.items.Share onShare={onShare} />
        </PopupMenu>
    )
}

export default TabMenu