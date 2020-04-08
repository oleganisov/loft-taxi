import React, { useContext } from 'react';
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

const LoginForm = ({ classes, handlerSignupLink, handlerNavigation }) => {
    const authContext = useContext(AuthContext);
    const handlerLogin = authContext.login;

    const handlerSubmit = (e) => {
        e.preventDefault();
        handlerLogin(e);
        handlerNavigation('map');
    };

    return (
        <Paper className={classes.paper}>
            <form onSubmit={handlerSubmit}>
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
                        />
                    </FormControl>
                    <Grid align="right">
                        <Button
                            variant="contained"
                            color="primary"
                            elevation={0}
                            type="submit"
                        >
                            Войти
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default withStyles(styles)(LoginForm);
