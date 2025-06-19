import { Menu } from 'react-native-paper'

const Share = ({ onShare, closeMenu }: { onShare: VoidFunction, [key: string]: any }) => {
    const onPress = () => {
        closeMenu()
        onShare()
    }
    return (<Menu.Item onPress={onPress} title="শেয়ার করুন" leadingIcon={'share-variant'} />)
}

export default Share