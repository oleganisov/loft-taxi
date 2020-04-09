import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button, Container } from '@material-ui/core';
import { AuthContext } from '../authContext';
import { Logo } from 'loft-taxi-mui-theme';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
    appBar: {
        backgroundColor: 'white',
    },
    logo: {
        flexGrow: 1,
    },
});

const Header = ({ classes }) => {
    const authContext = useContext(AuthContext);
    const handlerLogout = authContext.logout;

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Container className={classes.logo}>
                    <Logo />
                </Container>
                <Button>Карта</Button>
                <Button>Профиль</Button>
                <Button onClick={handlerLogout}>Выйти</Button>
            </Toolbar>
        </AppBar>
    );
};
Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
