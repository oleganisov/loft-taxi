import React, { useContext } from 'react';
import { AuthContext } from '../authContext';
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

const styles = () => ({
    paper: {
        padding: '68px 60px',
    },
    input: {
        marginBottom: '30px',
    },
});

const LoginForm = ({ classes, handlerSignupLink }) => {
    const value = useContext(AuthContext);
    const handlerLogin = value.login;

    return (
        <Paper className={classes.paper}>
            <form className="login_form" onSubmit={handlerLogin}>
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
                        <InputLabel htmlFor="user_name">
                            Имя пользователя
                        </InputLabel>
                        <Input
                            className={classes.input}
                            id="user_name"
                            name="user_name"
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
