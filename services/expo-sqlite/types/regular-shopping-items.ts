interface RegularShoppingItem {
    id: number,
    title: string;
    amount: string;
    is_completed: boolean;
    description?: string | null;
}

interface RegularShoppingItemInput {
    title: string;
    amount: string;
    is_completed: boolean;
    description?: string | null;
}


export type { RegularShoppingItem, RegularShoppingItemInput }