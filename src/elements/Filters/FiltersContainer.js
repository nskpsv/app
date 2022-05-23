import { connect } from 'react-redux';
import Filters from './Filters.jsx';
import { setGenderFilterActionCreator } from '../../redux/homePageReducer.js';

    const mapStateToProps = (state) => {
        return {
            filter: state.homePage.filters.gender,
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            onClick: (filter) => {
                dispatch(setGenderFilterActionCreator(filter))
            },
        };
    };

    const FiltersContainer = connect(mapStateToProps, mapDispatchToProps)(Filters)

export default FiltersContainer;