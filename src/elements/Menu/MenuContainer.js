import Menu from './Menu.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        shopCount: state.cart.products.length,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default MenuContainer;