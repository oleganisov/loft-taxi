import React from 'react';
import PropTypes from 'prop-types';
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

const Login = ({ classes, handlerSignupLink, handlerNavigation }) => {
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
                <LoginForm
                    handlerSignupLink={handlerSignupLink}
                    handlerNavigation={handlerNavigation}
                />
            </Grid>
        </Background>
    );
};

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
    handlerSignupLink: PropTypes.func.isRequired,
    handlerNavigation: PropTypes.func.isRequired,
};

export default withStyles(styles)(Login);
