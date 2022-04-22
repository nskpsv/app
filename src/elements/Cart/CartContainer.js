import { connect } from 'react-redux';
import Cart from './Cart.jsx';
import { incrementCountAC, decrementCountAC, deleteProductAC } from './../../redux/cartReducer.js';


const mapStateToProps = (state) => {

    const productsList = state.cart.products
        .reduce((result, id) => {

            const double = result.find(product => product.id === id);
            if (double) {
                double.count++
            } else {
                result.push({ ...state.products.entity[id], count: 1 })
            };

            return result;
        }, [])

    return {
        productsList: productsList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (id) => {
            dispatch(incrementCountAC(id))
        },
        onDecrement: (id) => {
            dispatch(decrementCountAC(id))
        },
        onDelete: (id) => {
            dispatch(deleteProductAC(id))
        },
    };
};

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;