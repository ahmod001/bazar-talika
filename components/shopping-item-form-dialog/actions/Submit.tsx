import colors from "@/theme/colors";
import { Button } from "react-native-paper";


interface Props { onPress?: VoidFunction, loading?: boolean }
const Submit = ({ onPress, loading }: Props) => (
    <Button onPress={onPress} mode='contained' style={style} loading={loading}>
        সংরক্ষণ করুন
    </Button>
)

const style = { borderColor: colors.secondary.main, backgroundColor: colors.primary.main, marginStart: 8 }


export default Submit;