import ProfileView from "./ProfileView.jsx";
import * as axios from 'axios';
import { setProfile } from './../../redux/profileReducer.js';
import React from "react";
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {

    /* почитать REST api
    life цикл react`а 
    virtual DOM
    AJAX запросы, заголовки, коды ошибок */

    //componentDidMount() {};

    getProfileData = (id) => {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/profile/' + id)
            .then(response => {
                this.props.setProfile(response.data)
            });
    };

    render() {
        return <ProfileView
            profile={this.props.profile}
            getProfileData={this.getProfileData} />
    };
};

const mapStateToProps = (state) => {
    return { profile: state.profile }
};

export default connect(mapStateToProps, { setProfile })(ProfileContainer);