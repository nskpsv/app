let initialState = {
    products: [],
};

export const addToCartAC = (id) => {
    return {
        type: 'ADD_TO_CART',
        id: id,
    };
};

export const incrementCountAC = (id) => {
    return {
        type: 'ADD_TO_CART',
        id: id,
    };
};

export const decrementCountAC = (id) => {
    return {
        type: 'DECREMENT_COUNT',
        id: id,
    };
};

export const deleteProductAC = (id) => {
    return {
        type: 'DELETE_PRODUCT',
        id: id,
    }
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                products: [...state.products, action.id]
            };

        case 'DECREMENT_COUNT': {
            let stateCopy = {...state,
            products: [...state.products],
            };
            stateCopy.products.splice(
                stateCopy.products.findIndex(id => id === action.id), 1);

            return stateCopy;
        };

        case 'DELETE_PRODUCT': {
            let index = state.products.findIndex(
                id => id === action.id);
            let stateCopy = {
                ...state,
                products: [...state.products]
            };

            while (index != -1) {
                stateCopy.products.splice(index, 1);
                index = stateCopy.products.findIndex(
                    id => id === action.id);
            };
            return stateCopy;
        };

        default:
            return state;
    };
};

export default cartReducer;