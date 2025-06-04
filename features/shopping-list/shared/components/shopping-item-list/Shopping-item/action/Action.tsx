import { View, ViewProps } from "react-native"
import Delete from "./delete/Delete"

const Action = ({ children, ...props }: { children?: React.ReactNode } & ViewProps) => (
    <View {...props}>
        {children}
    </View>
)


Action.Delete = Delete;

export default Action