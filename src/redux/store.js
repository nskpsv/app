import shoesMenSport1 from './../assets/productsPhoto/shoes/mensport1.jpg';
import shoesMenSport2 from './../assets/productsPhoto/shoes/mensport2.png';
import shoesMenSport3 from './../assets/productsPhoto/shoes/mensport3.png';
import shoesMenCasual1 from './../assets/productsPhoto/shoes/mencasual1.png';
import shoesMenCasual2 from './../assets/productsPhoto/shoes/mencasual2.png';
import shoesWomenSport1 from './../assets/productsPhoto/shoes/womensport1.jpg';
import shoesWomenSport2 from './../assets/productsPhoto/shoes/womensport2.jpg';
import shoesWomenSport3 from './../assets/productsPhoto/shoes/womensport3.jpg';
import shoesWomenCasual1 from './../assets/productsPhoto/shoes/womencasual1.jpg';
import shoesWomenCasual2 from './../assets/productsPhoto/shoes/womencasual2.jpg';
import shoesWomenCasual3 from './../assets/productsPhoto/shoes/womencasual3.jpg';
import bagsMenSport1 from './../assets/productsPhoto/bags/mensport1.jpeg';
import bagsMenSport2 from './../assets/productsPhoto/bags/mensport2.jpg';
import bagsMenSport3 from './../assets/productsPhoto/bags/mensport3.jpg';
import bagsMenCasual1 from './../assets/productsPhoto/bags/mencasual1.jpg';
import bagsMenCasual2 from './../assets/productsPhoto/bags/mencasual2.jpg';
import bagsMenCasual3 from './../assets/productsPhoto/bags/mencasual3.jpg';
import bagsWomenSport1 from './../assets/productsPhoto/bags/womensport1.jpg';
import bagsWomenSport2 from './../assets/productsPhoto/bags/womensport2.jpg';
import bagsWomenSport3 from './../assets/productsPhoto/bags/womensport3.jpg';
import bagsWomenCasual1 from './../assets/productsPhoto/bags/womencasual1.jpg';
import bagsWomenCasual2 from './../assets/productsPhoto/bags/womencasual2.jpg';
import bagsWomenCasual3 from './../assets/productsPhoto/bags/womencasual3.jpg';
import watchesMenSport1 from './../assets/productsPhoto/watches/mensport1.jpg';
import watchesMenSport2 from './../assets/productsPhoto/watches/mensport2.jpeg';
import watchesMenSport3 from './../assets/productsPhoto/watches/mensport3.jpg';
import watchesMenCasual2 from './../assets/productsPhoto/watches/mencasual2.png';
import watchesMenCasual3 from './../assets/productsPhoto/watches/mencasual3.jpg';
import watchesWomenSport1 from './../assets/productsPhoto/watches/womensport1.png';
import watchesWomenSport2 from './../assets/productsPhoto/watches/womensport2.png';
import watchesWomenSport3 from './../assets/productsPhoto/watches/womensport3.jpg';
import watchesWomenCasual1 from './../assets/productsPhoto/watches/womencasual1.jpg';
import watchesWomenCasual2 from './../assets/productsPhoto/watches/womencasual2.jpg';
import watchesWomenCasual3 from './../assets/productsPhoto/watches/womencasual3.jpg';

import iconBags from './../assets/categoriesIcons/bags.png';
import iconWatches from './../assets/categoriesIcons/watches.png';
import iconShoes from './../assets/categoriesIcons/shoes.png';
import iconGlasses from './../assets/categoriesIcons/glasses.png';
import iconAudio from './../assets/categoriesIcons/audio.png';
import iconEarrings from './../assets/categoriesIcons/earrings.png';
import iconHats from './../assets/categoriesIcons/hats.png';

import cartReducer from './cartReducer.js';
import homePageReducer from './homePageReducer';

const ADD_TO_CART = 'ADD_TO_CART';
const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
const SET_GENDER_FILTER = 'SET_GENDER_FILTER'

export const addToCartActionCreator = (productId) => {
    return {
        type: ADD_TO_CART,
        id: productId,
    };
};

export const setCategoryFilterActionCreator = (filter) => {
    return {
        type: SET_CATEGORY_FILTER,
        filter: filter,
    };
};

export const setGenderFilterActionCreator = (filter) => {
    return {
        type: SET_GENDER_FILTER,
        filter: filter,
    };
};

let callSubscriber;
let store = {

    subscribe(observer) {
        callSubscriber = observer;
    },

    _state: {
        _homePage: {
            _filters: {
                _gender: {
                    men: false,
                    women: false,
                    all: true
                },
    
                _category: '',
            },
            _categories: [
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
            _products: [
                {
                    id: 1,
                    category: 'bags',
                    gender: 'men',
                    style: 'casual',
                    photo: bagsMenCasual1,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Bag ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 2,
                    category: 'bags',
                    gender: 'men',
                    style: 'casual',
                    photo: bagsMenCasual2,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Bag ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 3,
                    category: 'bags',
                    gender: 'men',
                    style: 'casual',
                    photo: bagsMenCasual3,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Bag ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 4,
                    category: 'bags',
                    gender: 'men',
                    style: 'sport',
                    photo: bagsMenSport1,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Bag ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 5,
                    category: 'bags',
                    gender: 'men',
                    style: 'sport',
                    photo: bagsMenSport2,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Bag ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 6,
                    category: 'bags',
                    gender: 'men',
                    style: 'sport',
                    photo: bagsMenSport3,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Bag ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 7,
                    category: 'bags',
                    gender: 'women',
                    style: 'casual',
                    photo: bagsWomenCasual1,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Bag ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 8,
                    category: 'bags',
                    gender: 'women',
                    style: 'casual',
                    photo: bagsWomenCasual2,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Bag ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 9,
                    category: 'bags',
                    gender: 'women',
                    style: 'casual',
                    photo: bagsWomenCasual3,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Bag ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 10,
                    category: 'bags',
                    gender: 'women',
                    style: 'sport',
                    photo: bagsWomenSport1,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Bag ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 11,
                    category: 'bags',
                    gender: 'women',
                    style: 'sport',
                    photo: bagsWomenSport2,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Bag ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 12,
                    category: 'bags',
                    gender: 'women',
                    style: 'sport',
                    photo: bagsWomenSport3,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Bag ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 13,
                    category: 'shoes',
                    gender: 'women',
                    style: 'sport',
                    photo: shoesWomenSport1,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Shoe ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 14,
                    category: 'shoes',
                    gender: 'women',
                    style: 'sport',
                    photo: shoesWomenSport2,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Shoe ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 15,
                    category: 'shoes',
                    gender: 'women',
                    style: 'sport',
                    photo: shoesWomenSport3,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Shoe ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 16,
                    category: 'shoes',
                    gender: 'women',
                    style: 'casual',
                    photo: shoesWomenCasual1,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Shoe ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 17,
                    category: 'shoes',
                    gender: 'women',
                    style: 'casual',
                    photo: shoesWomenCasual2,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Shoe ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 18,
                    category: 'shoes',
                    gender: 'women',
                    style: 'casual',
                    photo: shoesWomenCasual3,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Shoe ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 19,
                    category: 'shoes',
                    gender: 'men',
                    style: 'casual',
                    photo: shoesMenCasual1,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Shoe ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 20,
                    category: 'shoes',
                    gender: 'men',
                    style: 'casual',
                    photo: shoesMenCasual2,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Shoe ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 21,
                    category: 'shoes',
                    gender: 'men',
                    style: 'sport',
                    photo: shoesMenSport1,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Shoe ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 22,
                    category: 'shoes',
                    gender: 'men',
                    style: 'sport',
                    photo: shoesMenSport2,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Shoe ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 23,
                    category: 'shoes',
                    gender: 'men',
                    style: 'sport',
                    photo: shoesMenSport3,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `Shoe ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here` },
                },
                {
                    id: 24,
                    category: 'watches',
                    gender: 'men',
                    style: 'sport',
                    photo: watchesMenSport1,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `watch ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here}located here` },
                },
                {
                    id: 25,
                    category: 'watches',
                    gender: 'men',
                    style: 'sport',
                    photo: watchesMenSport2,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `watch ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here}located here` },
                },
                {
                    id: 26,
                    category: 'watches',
                    gender: 'men',
                    style: 'sport',
                    photo: watchesMenSport3,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `watch ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here}located here` },
                },
                {
                    id: 27,
                    category: 'watches',
                    gender: 'men',
                    style: 'casual',
                    photo: watchesMenCasual2,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `watch ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here}located here` },
                },
                {
                    id: 28,
                    category: 'watches',
                    gender: 'men',
                    style: 'casual',
                    photo: watchesMenCasual3,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `watch ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here}located here` },
                },
                {
                    id: 29,
                    category: 'watches',
                    gender: 'women',
                    style: 'casual',
                    photo: watchesWomenCasual1,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `watch ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here}located here` },
                },
                {
                    id: 30,
                    category: 'watches',
                    gender: 'women',
                    style: 'casual',
                    photo: watchesWomenCasual2,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `watch ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here}located here` },
                },
                {
                    id: 31,
                    category: 'watches',
                    gender: 'women',
                    style: 'casual',
                    photo: watchesWomenCasual3,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `watch ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here}located here` },
                },
                {
                    id: 32,
                    category: 'watches',
                    gender: 'women',
                    style: 'sport',
                    photo: watchesWomenSport1,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `watch ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here}located here` },
                },
                {
                    id: 33,
                    category: 'watches',
                    gender: 'women',
                    style: 'sport',
                    photo: watchesWomenSport2,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `watch ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here}located here` },
                },
                {
                    id: 34,
                    category: 'watches',
                    gender: 'women',
                    style: 'sport',
                    photo: watchesWomenSport3,
                    price: Math.floor(Math.random() * 200),
                    raiting: Math.floor(Math.random() * 5),
                    title: function () { return `watch ${this.gender} ${this.style} ${this.id}` },
                    description: function () { return `Description and characteristics of the product "${this.title}" should be located here}located here` },
                },
            ],
        },
        _cart: {
        _products: [],
        },
    },

    dispatch(action) {
        this._state._homePage = homePageReducer(this._state._homePage, action);

        this._state._cart = cartReducer(this._state._cart, action);
    
       //callSubscriber()
    },

    getCategories() {
        return this._state._homePage._categories;
    },

    getProducts() {
        return this._state._homePage._products
    },

    getCartProducts() {

        let list = [];

        this._state._cart._products.forEach((id) => {
            let result = this._state._homePage._products.find(product => { return id === product.id });

            if (!!result) { list.push(result) }
        });

        return list;
    },

    addToCart(id) {
        this._state._cart._products.push(id);
    },

    getCartProductsCount() {
        return this._state._cart._products.length;
    },

    getFilters() {
        return {
            gender: this.getGenderFilter(),
            category: this.getCategoryFilter()
        }
    },
    getGenderFilter() {
        let f = this._state._homePage._filters._gender;
        switch (true) {
            case f.men:
                return 'men';
            case f.women:
                return 'women';
            default:
                return 'all';
        }
    },

    setGenderFilter(filter) {
        let f = this._state._homePage._filters._gender;
        for (key in f) {
            f[key] = false;
        };
        f[filter] = true;
    },

    getCategoryFilter() {
        let f = this._state._homePage._filters._category;
            let result = Object.keys(f).find(i => f[i] ? true : false);
            return !!result ? result : 'none';
        
    },
};

export default store;