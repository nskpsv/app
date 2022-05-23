import UsersView from "./UsersView.jsx";
import { follow, unfollow, changePage, getUsers } from './../../redux/usersReducer.js';
import React from 'react';
import { connect } from 'react-redux';
import Preloader from '../preloader/Preloader.jsx';

class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);

    };

    onChangePage = (currentPage) => {
        ;
        this.props.changePage(currentPage);
        this.props.getUsers(this.props.pageSize, currentPage);
    };

    render() {
 
        return <>
            {this.props.isFetching ? <Preloader /> 
            : <UsersView
                totalUsers={this.props.totalUsers}
                pageSize={this.props.pageSize}
                users={this.props.users}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                changePage={this.onChangePage}
                followingQueue={this.props.followingQueue}
                isAuth={this.props.isAuth} /> }
        </>
    };
};

const mapStateToProps = (state) => {
    return {
        users: state.users.users.map(user => state.profile.profiles[user]),
        pageSize: state.users.pageSize,
        totalUsers: state.users.totalUsers,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingQueue: state.users.followingQueue,
    };
};

export default connect(mapStateToProps, {follow, unfollow, changePage, getUsers})(UsersContainer);
    