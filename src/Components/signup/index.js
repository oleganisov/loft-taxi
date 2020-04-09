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

const Signup = ({ classes, handlerLoginLink, handlerNavigation }) => {
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
                    handlerLoginLink={handlerLoginLink}
                    handlerNavigation={handlerNavigation}
                />
            </Grid>
        </Background>
    );
};

Signup.propTypes = {
    classes: PropTypes.object.isRequired,
    handlerLoginLink: PropTypes.func.isRequired,
    handlerNavigation: PropTypes.func.isRequired,
};

export default withStyles(styles)(Signup);
