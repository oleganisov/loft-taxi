import React from 'react';
import InputText from '../common/inputText';
import { Logo } from 'loft-taxi-mui-theme';
import { Grid } from '@material-ui/core';
import Background from '../common/Background';
import ButtonActive from '../common/buttonActive';

import './index.css';

const SignupForm = ({ handlerSignup, handlerLoginLink }) => {
    return (
        <Background>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ minHeight: '100vh' }}
            >
                <Logo
                    white={true}
                    animated={true}
                    classes={{ logo: 'signup_logo' }}
                />
                <form className="signup_form" onSubmit={handlerSignup}>
                    <h1 className="signup_form__header">Регистрация</h1>
                    <div className="signup_form__text">
                        <span className="signup_form__span">
                            Уже зарегистрирован?
                        </span>
                        <a href="/login" onClick={handlerLoginLink}>
                            Войти
                        </a>
                    </div>
                    <InputText
                        inputClass="signup_form__email"
                        type="email"
                        name="email"
                        placeholder="Адрес электронной почты*"
                    />
                    <div className="signup_form__fullname">
                        <InputText
                            inputClass="signup_form__firstname"
                            type="text"
                            name="firstname"
                            placeholder="Имя*"
                        />
                        <InputText
                            inputClass="signup_form__lastname"
                            type="text"
                            name="lastname"
                            placeholder="Фамилия*"
                        />
                    </div>
                    <InputText
                        inputClass="signup_form__password"
                        type="password"
                        name="password"
                        placeholder="Пароль*"
                    />
                    <ButtonActive
                        buttonClass="signup_form__submit"
                        text="Войти"
                    />
                </form>
            </Grid>
        </Background>
    );
};

export default SignupForm;
