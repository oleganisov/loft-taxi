import React from 'react';
import InputText from '../common/inputText';
import Logo from '../common/logo';
import ButtonActive from '../common/buttonActive';

import './index.css';

const LoginForm = ({ handlerLogin, handlerSignupLink }) => {
    return (
        <>
            <div className="wrapper_form">
                <Logo logoClass="login_logo" txtRightClass="text_white" />
                <form className="login_form" onSubmit={handlerLogin}>
                    <h1 className="login_form__header">Войти</h1>
                    <div className="login_form__text">
                        <span className="login_form__span">
                            Новый пользователь?
                        </span>
                        <a href="/signup" onClick={handlerSignupLink}>
                            Зарегистрируйтесь
                        </a>
                    </div>
                    <InputText
                        inputClass="login_form__user"
                        type="text"
                        name="username"
                        placeholder="Имя пользователя*"
                    />
                    <InputText
                        inputClass="login_form__password"
                        type="password"
                        name="password"
                        placeholder="Пароль*"
                    />
                    <ButtonActive
                        buttonClass="login_form__submit"
                        text="Войти"
                    />
                </form>
            </div>
        </>
    );
};

export default LoginForm;
