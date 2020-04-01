import React from 'react';
import { ButtonYellow, InputText, Logo } from '../SimpleElements';

import './index.css';

const Signup = () => {
    return (
        <>
            <div className="wrapper_form">
                <Logo logoClass="signup__logo" txtRightClass="text_white" />
                <form className="signup_form">
                    <h1 className="signup_form__header">Регистрация</h1>
                    <div className="signup_form__text">
                        <span className="signup_form__span">
                            Уже зарегистрирован?
                        </span>
                        <a href="/login">Войти</a>
                    </div>
                    <InputText
                        inputClass="signup_form__email"
                        type="email"
                        name="email"
                        placeholder="Адрес электронной почты"
                    />
                    <div className="signup_form__fullname">
                        <InputText
                            inputClass="signup_form__firstname"
                            type="text"
                            name="firstname"
                            placeholder="Имя"
                        />
                        <InputText
                            inputClass="signup_form__lastname"
                            type="text"
                            name="lastname"
                            placeholder="Фамилия"
                        />
                    </div>
                    <InputText
                        inputClass="signup_form__password"
                        type="password"
                        name="password"
                        placeholder="Пароль"
                    />
                    <ButtonYellow
                        buttonClass="signup_form__submit"
                        text="Войти"
                    />
                </form>
            </div>
        </>
    );
};

export default Signup;
