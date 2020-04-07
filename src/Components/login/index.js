import React from 'react';
import { Grid } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import Background from '../common/Background';
import LoginForm from './LoginForm';

const Login = ({ handlerSignupLink }) => {
    return (
        <Background>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid xs={3}>
                    <Logo white={true} animated={true} />
                </Grid>
                <LoginForm handlerSignupLink={handlerSignupLink} />
            </Grid>
        </Background>
    );
};

export default Login;
