import * as React from 'react';
import { Menu, IconButton } from 'react-native-paper';
import useMenu from './useMenu';
import colors from '@/theme/colors';
import { Entypo } from '@expo/vector-icons';
import { View } from 'react-native';
import DeleteAll from './menu-items/DeleteAll';
import Share from './menu-items/Share';


const PopupMenu = ({ children, ...props }: { children: React.ReactNode, [key: string]: any }) => {
    const { visible, openMenu, closeMenu } = useMenu();

    return (
        <View {...props}>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<TriggerButton onPress={openMenu} />}>
                {children}
            </Menu>
        </View>
    );
};


const TriggerButton = ({ onPress }: { onPress: VoidFunction }) => (
    <IconButton

        onPress={onPress}
        mode='contained'
        icon={() => <Entypo name="dots-three-horizontal" size={20} color={colors.primary.main} />}
        iconColor={colors.primary.main}
        style={{ backgroundColor: colors.primary.light }}
    />
)


PopupMenu.items = { DeleteAll: DeleteAll, Share: Share }


export default PopupMenu;