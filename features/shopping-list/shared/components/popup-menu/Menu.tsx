import * as React from 'react';
import { Menu } from 'react-native-paper';
import useMenu from './useMenu';
import { View } from 'react-native';
import DeleteAll from './menu-items/DeleteAll';
import Share from './menu-items/Share';
import TriggerMenu from './TriggerMenu';
import usePassPropsIntoReactChildren from '@/hooks/usePassPropsIntoReactChildren';


const PopupMenu = ({ children, ...props }: { children: React.ReactNode, [key: string]: any }) => {
    const { visible, openMenu, closeMenu } = useMenu();
    const { getMutatedChildren } = usePassPropsIntoReactChildren(children)

    return (
        <View {...props}>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<TriggerMenu onPress={openMenu} />}>

                {getMutatedChildren({ closeMenu })}

            </Menu>
        </View>
    );
};



PopupMenu.items = { DeleteAll: DeleteAll, Share: Share }


export default PopupMenu;