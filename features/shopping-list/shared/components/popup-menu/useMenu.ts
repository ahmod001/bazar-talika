import React from 'react';

const useMenu = () => {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return {
        visible,
        openMenu,
        closeMenu,
    };
};

export default useMenu;