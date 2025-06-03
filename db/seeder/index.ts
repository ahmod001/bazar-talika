import seedRegularShoppingItem from "./RegularShoppingItemSeeder"

const seedDB = () => {
    seedRegularShoppingItem(10)

    console.log('DB seeded successfully');
    
}

export default seedDB;