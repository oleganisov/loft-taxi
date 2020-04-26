import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { Logo } from 'loft-taxi-mui-theme';
import Background from '../common/Background';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getIsLoggedIn } from '../../modules/auth';

const styles = () => ({
    logo: {
        marginRight: '215px',
    },
});

const Signup = ({ classes, isLoggedIn }) => {
    if (isLoggedIn) return <Redirect to="/map" />;
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
                <SignupForm />
            </Grid>
        </Background>
    );
};

Signup.propTypes = {
    classes: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
    isLoggedIn: getIsLoggedIn(state),
});

export default connect(mapStateToProps)(withStyles(styles)(Signup));
