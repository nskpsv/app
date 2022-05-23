import { connect } from 'react-redux';
import Products from './Products.jsx';
import { addToCartAC } from '../../redux/cartReducer.js';

const mapStateToProps = (state) => {
    return {
        products: splitByStyle(filter(state.homePage.filters, state.products.list)),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCartClick: (id) => {
            dispatch(addToCartAC(id))
        },
    };
};

const filter = (filters, products) => {
    return products.filter((product) => {
        return (
            (product.category === filters.category
                || filters.category === '')
            &&
            (product.gender === filters.gender
                || filters.gender === 'all')
        );
    });
};

const splitByStyle = (products) => {

    let result = products.reduce((result, product) => { 
        result[product.style] = result[product.style] || [];
        result[product.style].push(product);
        return result;
    }, {})

    return result;
};

export default connect(mapStateToProps, mapDispatchToProps)(Products)