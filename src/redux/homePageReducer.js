import iconBags from './../assets/categoriesIcons/bags.png';
import iconWatches from './../assets/categoriesIcons/watches.png';
import iconShoes from './../assets/categoriesIcons/shoes.png';
import iconGlasses from './../assets/categoriesIcons/glasses.png';
import iconAudio from './../assets/categoriesIcons/audio.png';
import iconEarrings from './../assets/categoriesIcons/earrings.png';
import iconHats from './../assets/categoriesIcons/hats.png';

let initialState = {
    filters: {
        gender: 'all',
        category: '',
    },
    categories: [
        {
            id: 1,
            title: 'bags',
            image: iconBags
        },
        {
            id: 2,
            title: 'watches',
            image: iconWatches
        },
        {
            id: 3,
            title: 'shoes',
            image: iconShoes
        },
        {
            id: 4,
            title: 'glasses',
            image: iconGlasses
        },
        {
            id: 5,
            title: 'audio',
            image: iconAudio
        },
        {
            id: 6,
            title: 'earrings',
            image: iconEarrings
        },
        {
            id: 7,
            title: 'hats',
            image: iconHats
        },
    ],
};
export const setCategoryFilterActionCreator = (filter) => {
    return {
        type: 'SET_CATEGORY_FILTER',
        filter: filter,
    };
};
export const setGenderFilterActionCreator = (filter) => {
    return {
        type: 'SET_GENDER_FILTER',
        filter: filter,
    };
};

const homePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_CATEGORY_FILTER':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    category: action.filter
                }
            };

        case 'SET_GENDER_FILTER':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    gender: action.filter
                }
            };

        default:
            return state;
    };
};

export default homePageReducer;