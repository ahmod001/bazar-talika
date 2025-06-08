import React from 'react';

const useDialog = () => {
    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    return {
        visible,
        showDialog,
        hideDialog
    };
};

export default useDialog;