import React from "react";
import { Field, reduxForm } from "redux-form";
import { correctEmail, required } from "../../utils/validators/validators.js";
import Input from "../formFields/input/Input.jsx";
import style from './login.module.css';

const LoginForm = (props) => {

    const { handleSubmit, pristine, submitting } = props;

    return (
        <form onSubmit={handleSubmit} className={style.loginForm}>
            <Field
                name='email'
                label='Email'
                component={renderField}
                placeholder="Email"
                type='email' />
            <Field
                name='password'
                label='Пароль'
                component={renderField}
                type='password'
                placeholder='Password' />
            <Field
                name='rememberMe'
                label='Запомнить меня'
                component={renderField}
                type='checkbox' />
            {props.error &&
                <div className={style.generalError}>
                    {props.error}
                </div>
            }
            <div className={style.loginButton}>
                <button type='submit' disabled={pristine || submitting}>Login</button>
            </div>
        </form>
    )
};

const validate = values => {

    const errors = {};

    errors.email = !values.email ? 'Нужно заполнить!'
        : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ? 'Некорректный Email адрес!'
            : undefined;

    errors.password = !values.password ? 'Нужно заполнить!'
        : undefined;
    return errors;
};

const warn = values => {
    const warnings = {};

    warnings.password = values.password &&
        values.password.length < 8 ? 'Небезопасная длина пароля'
        : undefined;

    return warnings;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
        <div className={`${style.field} ${touched && error && style.error}`}>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched &&
                    ((error && <div className={style.message}><span>{error}</span></div>) ||
                        ({ warning } && <div className={style.message}><span>{warning}</span></div>))}
            </div>
        </div>
    )
}

export default reduxForm({ form: 'login', validate })(LoginForm);