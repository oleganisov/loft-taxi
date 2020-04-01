import React from 'react';
import { ButtonYellow, InputText } from '../SimpleElements';

import './index.css';

const LoginForm = () => {
    return (
        <>
            <form className="login_form">
                <h1 className="login_form__header">Войти</h1>
                <div className="login_form__text">
                    <span className="login_form__span">
                        Новый пользователь?
                    </span>
                    <a href="/signup">Зарегистрируйтесь</a>
                </div>
                <InputText
                    inputClass="login_form__user"
                    type="text"
                    name="username"
                    placeholder="Имя пользователя"
                />
                <InputText
                    inputClass="login_form__password"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                />
                <ButtonYellow inputClass="login_form__submit" text="Войти" />
            </form>
        </>
    );
};

export default LoginForm;
