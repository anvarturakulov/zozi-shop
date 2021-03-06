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

const deleteAllItemFromCart = () => {
    return {
        type : 'DELETE_ALL_ITEM_FROM_CART'
    };
};

const changeCategory = (category) => {
    return {
        type : 'CHANGE_CATEGORY_FOR_PRODUCT_PANEL',
        payload : category
    };
};

const decQtty = (itemId) => {
    return {
        type : 'DEC_QTTY',
        payload : itemId
    };
};

const incQtty = (itemId) => {
    return {
        type : 'INC_QTTY',
        payload : itemId
    };
};

export {
    listLoaded,
    listRequested,
    listError, 
    addItemToCart,
    deleteItemFromCart,
    changeCategory,
    deleteAllItemFromCart,
    decQtty,
    incQtty
}