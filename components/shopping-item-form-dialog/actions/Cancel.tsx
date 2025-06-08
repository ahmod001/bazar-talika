import colors from "@/theme/colors"
import { Button } from "react-native-paper"

const Cancel = ({ onPress }: { onPress?: VoidFunction }) => (
    <Button onPress={onPress} mode='text' textColor={colors.secondary.dark} style={{ borderColor: colors.secondary.main, }}>
        বাতিল
    </Button>
)

export default Cancel