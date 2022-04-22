import UsersView from "./UsersView.jsx";
import { setUsers, followUser, unFollowUser, toggleIsFetching, changePage } from './../../redux/usersReducer.js';
import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Preloader from './../common/preloader/Preloader.jsx';

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users`, {params: {count: this.props.pageSize, page: this.props.currentPage}})
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data)
            })

    };

    onChangePage = (currentPage) => {;
        this.props.toggleIsFetching(true);
        this.props.changePage(currentPage);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data)
            });
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <UsersView
                totalUsers={this.props.totalUsers}
                pageSize={this.props.pageSize}
                users={this.props.users}
                currentPage={this.props.currentPage}
                follow={this.props.followUser}
                unfollow={this.props.unfollowUser}
                changePage={this.onChangePage} />
        </>
    };
};

const mapStateToProps = (state) => {
    return {
        users: state.users.usersList,
        pageSize: state.users.pageSize,
        totalUsers: state.users.totalUsers,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
    };
};

export default connect(mapStateToProps, {setUsers, followUser, unFollowUser, toggleIsFetching, changePage})(UsersAPI);