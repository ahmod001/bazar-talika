import ShoppingItemList from "@/features/shopping-list/shared/components/shopping-item-list/ShoppingItemList";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="container bg-secondary-light h-full ">
      <ShoppingItemList />
    </View>
  );
}