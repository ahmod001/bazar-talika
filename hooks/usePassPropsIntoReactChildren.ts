import React from "react";

/**
 * usePassPropsIntoReactChildren
 * 
 * A custom React hook to inject or override props into all valid React children.
 *
 * @param {React.ReactNode} children - The React children nodes to clone with new props.
 * @returns {{ getMutatedChildren: (props: object) => React.ReactNode }} 
 *          An object with a function `getMutatedChildren` that takes props and returns cloned children with those props applied.
 *
 * @example
 * const { getMutatedChildren } = usePassPropsIntoReactChildren(children);
 * const newChildren = getMutatedChildren({ disabled: true });
 * 
 * // newChildren now contains all children with `disabled` prop injected.
 */


const usePassPropsIntoReactChildren = (children: React.ReactNode) => {

    const getMutatedChildren = (props: { [key: string]: any }) => {
        return React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, props as { [key: string]: any });
            }
            return child;
        })
    }
    return { getMutatedChildren }
}

export default usePassPropsIntoReactChildren