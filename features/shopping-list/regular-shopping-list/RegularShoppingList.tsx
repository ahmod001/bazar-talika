import { useEffect } from "react";
import { View } from "react-native";
import ShoppingItemList from "../shared/components/shopping-item-list/ShoppingItemList";
import useFetch from "./hooks/useFetch";

// const _data = [
//   { id: 1, title: 'আলু', amount: '১০ কেজি', is_completed: false },
//   { id: 2, title: 'তেল', amount: '১ লিটার', is_completed: false },
//   { id: 3, title: 'পেঁয়াজ', amount: '৫ কেজি', is_completed: true },
//   { id: 4, title: 'চাল', amount: '২০ কেজি', is_completed: false },

// ];

export default function RegularShoppingList() {

  const { fetch, data, isLoading } = useFetch()

  useEffect(() => {
    fetch()
  }, [])

  return (
    <View className="container bg-secondary-light h-full pt-4">
      <ShoppingItemList data={data} />
    </View>
  );
}
