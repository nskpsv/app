import Categories from './Categories.jsx';
import { setCategoryFilterActionCreator } from "../../redux/store.js";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        categories: state.homePage.categories,
        filter: state.homePage.filters.category,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (category) => {
            dispatch(setCategoryFilterActionCreator(category))
        },
    };
};

const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories)

export default CategoriesContainer;