import { useState } from "react";

const useChecked = (defaultValue: boolean) => {
    const [checked, setChecked] = useState<boolean>(defaultValue);

    const toggle = () => setChecked(prev => !prev);

    return { checked, toggleCheck: toggle };
};

export default useChecked;