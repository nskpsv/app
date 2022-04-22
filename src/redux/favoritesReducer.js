let initialState = {
    favoriteProducts: [],
};

export const addToFavoriteActionCreator = (productId) => {
    return {
        type: 'ADD_TO_FAVORITE',
        id: productId,
    };
};

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favoriteProducts: [...state.products, action.id]
            };

        default:
            return state;
    };
};

export default favoriteReducer;