import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import Background from '../common/Background';
import Header from '../common/Header';
import PaymentForm from './PaymentForm';

const styles = () => ({
    root: { paddingTop: '50px' },
});

const Profile = ({ classes, handlerNavigation }) => {
    return (
        <Background>
            <Header handlerNavigation={handlerNavigation} />
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
    handlerNavigation: PropTypes.func.isRequired,
};

export default withStyles(styles)(Profile);
