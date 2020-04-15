import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button, Container } from '@material-ui/core';
import { Logo } from 'loft-taxi-mui-theme';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { logoutUser } from '../../modules/auth';

const styles = () => ({
    appBar: {
        backgroundColor: 'white',
    },
    logo: {
        flexGrow: 1,
    },
});

const Header = ({ classes, logoutUser }) => {
    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Container className={classes.logo}>
                    <Logo />
                </Container>
                <Button component={RouterLink} to="/map">
                    Карта
                </Button>
                <Button component={RouterLink} to="/profile">
                    Профиль
                </Button>
                <Button onClick={logoutUser}>Выйти</Button>
            </Toolbar>
        </AppBar>
    );
};
Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
    logoutUser,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Header));
