interface ShoppingItem { title: string; amount: string;[key: string]: any }

export const shoppingListInTextFormatted = (data: ShoppingItem[], header: string) => {
    const lines = data
        .map((item, i) => `${i + 1}. ${item.title} - ${item.amount}`)
        .join('\n');
    return [header,'-----------------------' ,lines].join('\n');
};

