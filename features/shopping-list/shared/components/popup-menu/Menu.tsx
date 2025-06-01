import * as React from 'react';
import { Menu, Divider, IconButton } from 'react-native-paper';
import useMenu from './useMenu';
import colors from '@/theme/colors';
import { Entypo } from '@expo/vector-icons';


const PopupMenu = () => {
    const { visible, openMenu, closeMenu } = useMenu();

    return (
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<TriggerButton onPress={openMenu} />}>
            <Menu.Item onPress={() => { }} title="সব মুছে ফেলুন" leadingIcon={'delete'} />
            <Divider />
            <Menu.Item onPress={() => { }} title="শেয়ার করুন" leadingIcon={'share-variant'} />

        </Menu>
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

export default PopupMenu;