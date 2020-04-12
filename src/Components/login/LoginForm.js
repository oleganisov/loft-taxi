import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    FormControl,
    InputLabel,
    Input,
    Button,
    Typography,
    Link,
    Paper,
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { AuthContext } from '../authContext';

const styles = () => ({
    paper: {
        padding: '60px 55px',
    },
    input: {
        marginBottom: '30px',
    },
});

const LoginForm = ({ classes, handlerPage }) => {
    const authContext = useContext(AuthContext);
    const handlerLogin = authContext.login;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handlerSignupLink = (e) => {
        e.preventDefault();
        handlerPage('signup');
    };
    const handlerSubmit = (e) => {
        const username = e.target.username.value;
        const password = e.target.password.value;

        e.preventDefault();
        handlerLogin(username, password);
        handlerPage('map');
    };
    const handlerChangeUsername = (e) => {
        setUsername(e.target.value);
    };
    const handlerChangePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <Paper className={classes.paper}>
            <form onSubmit={handlerSubmit} id="login-form">
                <Grid container direction="column">
                    <Typography
                        component="h1"
                        variant="h4"
                        align="left"
                        gutterBottom
                    >
                        Войти
                    </Typography>
                    <Typography align="left">
                        Новый пользователь?{' '}
                        <Link
                            align="left"
                            underline="none"
                            href="/signup"
                            onClick={handlerSignupLink}
                        >
                            Зарегистрируйтесь
                        </Link>
                    </Typography>
                    <FormControl required>
                        <InputLabel htmlFor="username">
                            Имя пользователя
                        </InputLabel>
                        <Input
                            className={classes.input}
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Имя пользователя"
                            required
                            onChange={handlerChangeUsername}
                            value={username}
                        />
                    </FormControl>
                    <FormControl required>
                        <InputLabel htmlFor="password">Пароль</InputLabel>
                        <Input
                            className={classes.input}
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Пароль"
                            required
                            onChange={handlerChangePassword}
                            value={password}
                        />
                    </FormControl>
                    <Grid align="right">
                        <Button
                            variant="contained"
                            color="primary"
                            elevation={0}
                            type="submit"
                            data-testid="login-submit"
                        >
                            Войти
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
    handlerPage: PropTypes.func.isRequired,
};

export default withStyles(styles)(LoginForm);
