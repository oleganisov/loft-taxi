import React from 'react';
import { Grid } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { Logo } from 'loft-taxi-mui-theme';
import Background from '../common/Background';
import LoginForm from './LoginForm';

const styles = () => ({
    logo: {
        marginRight: '215px',
    },
});

const Login = ({ classes, handlerSignupLink }) => {
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
                    classes={{ logo: classes.logo }}
                />
                <LoginForm handlerSignupLink={handlerSignupLink} />
            </Grid>
        </Background>
    );
};

export default withStyles(styles)(Login);
