import React from "react";
import style from './Profile.module.css';
import Preloader from './../common/preloader/Preloader.jsx';
import { Link } from "react-router-dom";
import Contacts from './../common/contacts/Contacts.jsx';
import { useParams } from 'react-router-dom';

const ProfileView = (props) => {

    let isFetching = true;
    const params = useParams().userId;
    params == props.profile.userId
    ? isFetching = false
    : props.getProfileData(params)

    return isFetching
        ? <Preloader />
        : <BuildProfile profile={props.profile} />
};

const BuildProfile = (props) => {

    const p = props.profile;

    return <div className={style.container}>
        <div className={style.back}>
            <Link to="/users">←</Link>
        </div >
        <div className={style.avatar}>
            <img src={p.photos.large} />
        </div>
        <div className={style.name}>
            {p.fullName
            }</div>
        <div className={style.about}>
            {p.aboutMe}
        </div>
        <div className={style.contacts}>
            <p>Контакты:</p>
            <Contacts
                contacts={Object.keys(p.contacts).map(key => p.contacts[key])} />
        </div>
        {
            !!p.lookingForAJob && (
                <div className={style.job}>
                    <p>
                        Ищу работу:
                    </p>
                    <p>
                        {p.lookingForAJobDescription}
                    </p>
                </div>
            )
        }
    </div>
};

export default ProfileView;