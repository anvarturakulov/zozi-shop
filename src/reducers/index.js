const initialState = {
    list : [],
    cart : [],
    loading:true,
    error: false,
    totalPrice : 0,
    currentCategory: 'bouquet'
}


const saveCartToStorage = (data) => {
    localStorage.setItem("cartData", JSON.stringify(data));
}

const getCartFromStorage = () => {
    const cartData = localStorage.getItem("cartData");
    return JSON.parse(cartData);
}

const reducer = (state = initialState, action) => {
    
    const cartDataFromStorage = getCartFromStorage();
    if (cartDataFromStorage) {
        state.cart = [...cartDataFromStorage]
    }

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
                saveCartToStorage([...state.cart.slice(0, itemInd),newItem,...state.cart.slice(itemInd + 1)])
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
                category: item.category,
                qtty : 1
            };
            saveCartToStorage([...state.cart,newItem])
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
            saveCartToStorage([...state.cart.slice(0, index),...state.cart.slice(index+1)])
            return {
                ...state,
                cart : [
                    ...state.cart.slice(0, index),
                    ...state.cart.slice(index+1)
                ],
                totalPrice : state.totalPrice - itemDel.price*itemDel.qtty
            };
        case 'DELETE_ALL_ITEM_FROM_CART':
            let arr = []
            saveCartToStorage([...arr])
            return {
                ...state,
                cart : [...arr],
                totalPrice : 0
            };
        case 'CHANGE_CATEGORY_FOR_PRODUCT_PANEL':
            return {
                ...state,
                currentCategory: action.payload,
            };
        case 'INC_QTTY':
                const idInc = action.payload
                const itemIndInc = state.cart.findIndex(item => item.id === idInc)
                if (itemIndInc >=0) {
                    const itemInCartInc = state.cart.find(item => item.id === idInc)
                    const newItemInc = {
                        ...itemInCartInc,
                        qtty : ++itemInCartInc.qtty
                    }
                    saveCartToStorage([...state.cart.slice(0, itemIndInc),newItemInc,...state.cart.slice(itemIndInc + 1)])
                    return {
                        ...state,
                        cart : [
                            ...state.cart.slice(0, itemIndInc),
                            newItemInc,
                            ...state.cart.slice(itemIndInc + 1)
                        ],
                        totalPrice : state.totalPrice + newItemInc.price
                    }
                };
                break;
        case 'DEC_QTTY': 
            const idDec = action.payload
            const itemIndDec = state.cart.findIndex(item => item.id === idDec)
            if (itemIndDec >=0) {
                const itemInCartDec = state.cart.find(item => item.id === idDec)
                if (itemInCartDec.qtty > 1) {
                    const newItemDec = {
                        ...itemInCartDec,
                        qtty : --itemInCartDec.qtty
                    }
                    saveCartToStorage([...state.cart.slice(0, itemIndDec),newItemDec,...state.cart.slice(itemIndDec + 1)])
                    return {
                        ...state,
                        cart : [
                            ...state.cart.slice(0, itemIndDec),
                            newItemDec,
                            ...state.cart.slice(itemIndDec + 1)
                        ],
                        totalPrice : state.totalPrice - newItemDec.price
                    }
                } else {
                    return {
                        ...state
                    }
                }
            };
            break;
        default : 
            return state;
    }

    
}

export default reducer;