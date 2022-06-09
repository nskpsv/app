import ProfileView from "./ProfileView.jsx";
import { putStatus, requestProfile, saveProfile, uploadAvatar } from './../../redux/profileReducer.js';
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { sellectProfile } from '../../redux/profileSellectors.js';
import { sellectMyId } from "../../redux/authSellectors.js";
import Preloader from "../preloader/Preloader.jsx";
import isFullProfileInfo from "../../utils/validators/isFullProfileInfo.js";

const ProfileContainer = () => {
    const { userId } = useParams();
    const myId = useSelector(state => sellectMyId(state));
    const isFetching = useSelector(state => state.profile.isFetching)
    const currentProfile = useSelector(state => sellectProfile(state, userId));
    const editable = myId == userId;
    const [editProfile, setEditProfile] = useState (false);

    const setStatus = status => dispatch(putStatus(status));
    const dispatch = useDispatch();
    const uploadAvatarHandler = ({target: {files: [file]}}) => {
        file ? dispatch(uploadAvatar(file, userId)) : undefined
    };
    const onSubmit = values => {
        values.fullName = values.name;
        values.userId = values.id;
        dispatch(saveProfile(values));
        setEditProfile(prev => !prev);
    };
    
    React.useEffect(() => {
        dispatch(requestProfile(userId));
    },[userId])

    if (!isFullProfileInfo(currentProfile) || isFetching) {
        return <Preloader />}
 
    return <ProfileView
        profile={currentProfile}
        editable={editable}
        setStatus={setStatus}
        avatarHandler={uploadAvatarHandler}
        onSubmit={onSubmit}
        editProfile={editProfile}
        setEditProfile={setEditProfile} />;
};

export default ProfileContainer;