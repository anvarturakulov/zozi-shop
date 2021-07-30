const listLoaded = (newList) => {
    return {
        type : 'LIST_LOADED',
        payload : newList
    };
};

const listRequested = () => {
    return {
        type : 'LIST_REQUESTED',
    };
};

const listError = () => {
    return {
        type : 'LIST_ERROR',
    };
};

const addItemToCart = (itemId) => {
    return {
        type : 'ADD_ITEM_TO_CART',
        payload : itemId
    };
};

const deleteItemFromCart = (itemId) => {
    return {
        type : 'DELETE_ITEM_FROM_CART',
        payload : itemId
    };
};

export {
    listLoaded,
    listRequested,
    listError, 
    addItemToCart,
    deleteItemFromCart
}