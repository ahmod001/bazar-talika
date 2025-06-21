import { Link } from "expo-router"
import { Menu } from "react-native-paper"

const PrivacyPolicy = () => {
    return (
    <Link href={'/(others)/about'}>
    
        <Menu.Item title="Privacy & Policy" leadingIcon={'delete'} />
        </Link>
    )
}

export default PrivacyPolicy