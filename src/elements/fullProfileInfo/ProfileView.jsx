import React from "react";
import style from './Profile.module.css';
import Preloader from '../preloader/Preloader.jsx';
import { Link } from "react-router-dom";
import Contacts from '../contacts/Contacts.jsx';
import Status from './../status/Status';

const ProfileView = (props) => {
    const { profile } = props;

    if (!profile) return <Preloader />
    console.log('ProfView ' + JSON.stringify(profile));

    return (<div className={style.container}>
        <div className={style.back}>
            <Link to="/users">←</Link>
        </div >
        <div className={style.avatar}>
            <img src={profile.photos.large} />
        </div>
        <Status status={profile.status} setStatus={props.setStatus} />
        <div className={style.name}>
            {profile.name}
        </div>
        <div className={style.about}>
            {profile.aboutMe}
        </div>
        <div className={style.contacts}>
            <p>Контакты:</p>
            {
                !profile.contacts ?
                    <Preloader />
                    :
                    <Contacts
                        contacts={Object.keys(profile.contacts).map(key => profile.contacts[key])} />
            }
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