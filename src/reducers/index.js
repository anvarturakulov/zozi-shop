const initialState = {
    list : [],
    cart : [],
    loading:true,
    error: false,
    totalPrice : 0,
    currentCategory: 'bouquet'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LIST_LOADED':
            return {
                ...state,
                list: action.payload,
                loading:false,
                error : false
            };
        case 'LIST_REQUESTED':
            return {
                ...state,
                list: state.list,
                loading:true,
                error : false
            };
        case 'LIST_ERROR':
            return {
                ...state,
                error:true
            };
        case 'ADD_ITEM_TO_CART':
            const id = action.payload
            const itemInd = state.cart.findIndex(item => item.id === id)

            if (itemInd >=0) {
                const itemInCart = state.cart.find(item => item.id === id)
                const newItem = {
                    ...itemInCart,
                    qtty : ++itemInCart.qtty
                }
                return {
                    ...state,
                    cart : [
                        ...state.cart.slice(0, itemInd),
                        newItem,
                        ...state.cart.slice(itemInd + 1)
                    ],
                    totalPrice : state.totalPrice + newItem.price
                }
            }

            const item = state.list.find(item => item.id === id)
            const newItem = {
                title : item.title,
                price : item.price,
                url : item.url,
                id : item.id,
                qtty : 1
            };

            return {
                ...state,
                cart : [
                        ...state.cart,
                        newItem
                    ],
                totalPrice : state.totalPrice + newItem.price
            }

        case 'DELETE_ITEM_FROM_CART':
            const idx = action.payload
            const index = state.cart.findIndex(item => item.id === idx)
            const itemDel = state.cart.find(item => item.id === idx)
            return {
                ...state,
                cart : [
                    ...state.cart.slice(0, index),
                    ...state.cart.slice(index+1)
                ],
                totalPrice : state.totalPrice - itemDel.price*itemDel.qtty
            };
        case 'CHANGE_CATEGORY_FOR_PRODUCT_PANEL':
            return {
                ...state,
                currentCategory: action.payload,
            };
        default : 
            return state;
    }
}

export default reducer;