export interface RegularShoppingItem {
    id:number,
    title: string;
    amount: string;
    is_completed: boolean;
    description?: string | null;
}


export interface RegularShoppingItemInput {
    title: string;
    amount: string;
    is_completed: boolean;
    description?: string | null;
}