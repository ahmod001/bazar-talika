import React from 'react'
import PopupMenu from '../../shared/components/popup-menu/Menu'

const TabMenu = ({ ...props }: { [key: string]: any }) => {
    return (
        <PopupMenu {...props} >
            <PopupMenu.items.DeleteAll onDelete={() => true} />
            <PopupMenu.items.Share />
        </PopupMenu>
    )
}

export default TabMenu