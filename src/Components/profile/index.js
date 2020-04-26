import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import Background from '../common/Background';
import PaymentForm from './PaymentForm';
import Header from '../common/Header';

const styles = () => ({
    root: { paddingTop: '50px' },
});

const Profile = ({ classes }) => {
    return (
        <Background>
            <Header />
            <Grid
                className={classes.root}
                container
                direction="column"
                style={{ minHeight: 'calc(100vh - 66.39px)' }}
            >
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <PaymentForm />
                </Grid>
            </Grid>
        </Background>
    );
};

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
