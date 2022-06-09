import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import style from './editProfileForm.module.css';

const EditProfile = (props) => {
    const {
        contacts,
        handleSubmit,
        pristine,
        reset,
        submitting,
        setEditProfile,
        submit,
        initialValues: { lookingForAJob }
    } = props;
    const [enableDescription, setEnableDescription] = useState(lookingForAJob)

    const handleJobClick = () => {
        setEnableDescription(prev => !prev)
    };

    useEffect(() => {
        const jobCheck = document.getElementsByName('lookingForAJob');
        if (lookingForAJob)
            jobCheck.checked = true
    });

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className={style.nameField + ' ' + style.field}>
                <label>Имя</label>
                <div>
                    <Field
                        name='name'
                        component='input'
                        placeholder='Имя'
                    />
                </div>
            </div>
            <div className={style.aboutMeField + ' ' + style.field}>
                <label>Обо мне</label>
                <div>
                    <Field
                        name='aboutMe'
                        component='textarea'
                        placeholder='Напишите что ни-будь о себе'
                    />
                </div>
            </div>
            <div className={style.contacts}>
                <div className={style.contactsTitle}>
                    <label>Контакты:</label>
                </div>
                <div className={style.contactsList}>
                    <Contacts contacts={contacts} />
                </div>
            </div>
            <div className={style.lookingForAJobField + ' ' + style.field}>
                <div>
                    <label>Ищу работу:
                        <Field
                            name='lookingForAJob'
                            component='input'
                            type='checkbox'
                            onChange={handleJobClick} />
                    </label>
                </div>
                <div>
                    <label> Что вы ищите
                        <Field
                            disabled={!enableDescription}
                            name='lookingForAJobDescription'
                            component='textarea'
                            placeholder='Описание работы' />
                    </label>
                </div>
            </div>
            <div className={style.buttons}>
                <button type="submit" disabled={pristine || submitting}>Сохранить</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Отчистить</button>
                <button type="button" onClick={() => setEditProfile(prev => !prev)}>Отмена</button>
            </div>
        </form>
    )
};

const Contacts = ({ contacts }) => {

    return contacts.map(key => {
        return <div key={key}>
            <label>
                {key[0].toUpperCase() + key.slice(1) + ' '}
                <Field
                    name={`contacts.${key}`}
                    component='input'
                    placeholder={`${key} contact`} />
            </label>
        </div>
    })
};

export default reduxForm({ form: 'editProfile' })(EditProfile);