import { View } from 'react-native'
import ShoppingItem from './Shopping-item/ShoppingItem'

const ShoppingItemList = () => {
    return (
        <View>
            <ShoppingItem title='আলু' amount="১০ কেজি" isCompleted={false} />
        </View>
    )
}

export default ShoppingItemList