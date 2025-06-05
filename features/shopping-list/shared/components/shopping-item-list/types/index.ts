
type ItemComponent = (props: { item: ShoppingItemType; index: number }) => React.ReactElement

interface ShoppingItemType {
    id: number;
    title: string;
    amount: string;
    is_completed: boolean;
    [key: string]: any;
}


interface ShoppingItemListProps {
    reRender?: boolean;
    loading?: boolean;
    data: ShoppingItemType[];
    itemComponent: ItemComponent;
}

export type { ShoppingItemListProps, ItemComponent }