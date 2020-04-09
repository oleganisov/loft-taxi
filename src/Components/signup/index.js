import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { Logo } from 'loft-taxi-mui-theme';
import Background from '../common/Background';
import SignupForm from './SignupForm';

const styles = () => ({
    logo: {
        marginRight: '215px',
    },
});

const Signup = ({ classes, handlerSignup, handlerLoginLink }) => {
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

                <SignupForm
                    handlerSignup={handlerSignup}
                    handlerLoginLink={handlerLoginLink}
                />
            </Grid>
        </Background>
    );
};

Signup.propTypes = {
    classes: PropTypes.object.isRequired,
    handlerSignup: PropTypes.func.isRequired,
    handlerLoginLink: PropTypes.func.isRequired,
};

export default withStyles(styles)(Signup);
