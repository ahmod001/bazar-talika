import { View } from "react-native";
import ShoppingItemList from "../shared/components/shopping-item-list/ShoppingItemList";

const data = [
    { id: 1, title: 'আলু', amount: '১০ কেজি', isCompleted: false },
    { id: 2, title: 'তেল', amount: '১ লিটার', isCompleted: false },
    { id: 3, title: 'পেঁয়াজ', amount: '৫ কেজি', isCompleted: true },
    { id: 4, title: 'চাল', amount: '২০ কেজি', isCompleted: false },

];

export default function RegularShoppingList() {
  return (
    <View className="container bg-secondary-light h-full pt-4">
      <ShoppingItemList data={data}/>
    </View>
  );
}