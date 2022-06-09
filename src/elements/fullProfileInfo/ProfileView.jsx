import React from "react";
import style from './profile.module.css';
import Contacts from '../contacts/Contacts.jsx';
import Status from './../status/Status.jsx';
import ProfileForm from './EditProfileForm.jsx';
import { Link } from "react-router-dom";

const ProfileView = ({
    profile,
    editable,
    setStatus,
    avatarHandler,
    onSubmit,
    setEditProfile,
    editProfile }) => {
    
    return (
    <div className={style.container}>
        <div className={style.back}>
            <Link to="/users">←</Link>
        </div >
        <div className={style.avatar}>
            <img className={style.photo} src={profile.photos.large != null
                ? profile.photos.large
                : 'https://avatars.mds.yandex.net/i?id=e59578788a28c0fc9e7f3266cb1c5f3f-5859771-images-thumbs&n=13'} />
            {editable && <input type={"file"} onChange={avatarHandler}></input>}
        </div>
        <Status 
            status={profile.status}
            setStatus={setStatus}
            editable={editable} />
        <div className={style.id}>
            <span>ID: </span>
            {profile.id}
        </div>
        { editProfile
        ? <ProfileForm
        initialValues={profile}
        contacts={Object.keys(profile.contacts)}
        onSubmit={onSubmit}
        setEditProfile={setEditProfile}/>
        : <ProfileData 
        profile={profile}
        editable={editable}
        setEditProfile={setEditProfile} />}
    </div>
    )
};

const ProfileData = ({profile, editable, setEditProfile}) => {
    return (
        <div className={style.profileData} >
            <div className={style.name}>
                <span>Имя: </span>
                {profile.name}
            </div>
            <div className={style.about}>
                <span>Обо мне: </span>
                {profile.aboutMe}
            </div>
            <div className={style.contacts}>
                <span>Контакты: </span>
                <Contacts contacts={Object.keys(profile.contacts).map(key => profile.contacts[key])} />
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
            {editable && <button onClick={() => setEditProfile(prev => !prev)}>Редактировать</button>}
        </div>
    )
};

export default ProfileView;