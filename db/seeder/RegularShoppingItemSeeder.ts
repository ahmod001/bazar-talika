import RegularShoppingItem from "../models/RegularShoppingItem"

const data = { title: 'লরেম ইপ্সাম', amount: '১০ কেজি', is_completed: false }


const seedRegularShoppingItem = async (count = 1) => {

    RegularShoppingItem.destroyAll()

    for (let index = 0; index < count; index++) {
        await RegularShoppingItem.create(data)
    }
}

export default seedRegularShoppingItem;