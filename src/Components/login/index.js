import React from 'react';
import SignupForm from '../signup';
import { ButtonYellow, InputText, Logo } from '../SimpleElements';

import './index.css';

const LoginForm = ({
    navigation,
    handlerLogin,
    handlerSignup,
    handlerLoginLink,
    handlerSignupLink
}) => {
    if (navigation === 'signup')
        return (
            <SignupForm
                handlerSignup={handlerSignup}
                handlerLoginLink={handlerLoginLink}
            />
        );
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
                        inputClass="login_form__user input_resize"
                        type="text"
                        name="username"
                        placeholder="Имя пользователя*"
                    />
                    <InputText
                        inputClass="login_form__password input_resize"
                        type="password"
                        name="password"
                        placeholder="Пароль*"
                    />
                    <ButtonYellow
                        buttonClass="login_form__submit"
                        text="Войти"
                    />
                </form>
            </div>
        </>
    );
};

export default LoginForm;
