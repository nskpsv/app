import React from "react";
import style from './Profile.module.css';
import Preloader from '../preloader/Preloader.jsx';
import { Link } from "react-router-dom";
import Contacts from '../contacts/Contacts.jsx';
import { useParams } from 'react-router-dom';

const ProfileView = (props) => {

    const { profile } = props;

    if (!profile) return <Preloader />


    return (<div className={style.container}>
        <div className={style.back}>
            <Link to="/users">←</Link>
        </div >
        <div className={style.avatar}>
            <img src={profile.photos.large} />
        </div>
        <div className={style.name}>
            {profile.fullName
            }</div>
        <div className={style.about}>
            {profile.aboutMe}
        </div>
        <div className={style.contacts}>
            <p>Контакты:</p>
            <Contacts
                contacts={Object.keys(profile.contacts).map(key => profile.contacts[key])} />
        </div>
        {
            !!profile.lookingForAJob && (
                <div className={style.job}>
                    <p>
                        Ищу работу:
                    </p>
                    <p>
                        {profile.lookingForAJobDescription}
                    </p>
                </div>
            )
        }
    </div>   
    ) 
};

export default ProfileView;