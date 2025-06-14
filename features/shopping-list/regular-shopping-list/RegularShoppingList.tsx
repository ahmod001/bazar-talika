import { useCallback, useEffect } from "react";
import { View } from "react-native";
import ShoppingItemList from "../shared/components/shopping-item-list/ShoppingItemList";
import useFetch from "./hooks/useFetch";
import { useRegularShoppingItemStore } from "@/services/zustand/stores/regular-shopping-item-store";
import Item from "./components/Item";
import { ItemComponent } from "../shared/components/shopping-item-list/types";
import CreateShoppingItem from "../shared/components/create-shopping-item/CreateShoppingItem";
import useCreate from "./hooks/useCreate";

export default function RegularShoppingList() {

  const { isReloadRegularShoppingList } = useRegularShoppingItemStore(state => state)

  const { fetch, data, isLoading } = useFetch()
  const { create } = useCreate()

  useEffect(() => {
    fetch()
  }, [isReloadRegularShoppingList])



  const itemComponent: ItemComponent = useCallback(({ item }) => {
    return <Item {...item} />
  }, [])


  return (
    <View className="container bg-secondary-light h-full pt-4">
      <ShoppingItemList data={data} reRender={isReloadRegularShoppingList} itemComponent={itemComponent} loading={isLoading} />


      <CreateShoppingItem onCreate={create}/>
    </View>
  );
}




