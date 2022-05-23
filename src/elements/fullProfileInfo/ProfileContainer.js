import ProfileView from "./ProfileView.jsx";
import { setProfile, getProfile } from './../../redux/profileReducer.js';
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import Preloader from "../preloader/Preloader.jsx";


const ProfileContainer = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const myId = useSelector(state => state.auth.data.id);
    const currentProfile = useSelector(state => state.profile.profiles[userId]);

console.log('profContainer ' + JSON.stringify(currentProfile));

    if (!currentProfile || !currentProfile.aboutMe) dispatch(getProfile(userId));

    const editable = myId == userId;
    return <ProfileView
        profile={currentProfile}
        editable={editable} />;
};

export default ProfileContainer;