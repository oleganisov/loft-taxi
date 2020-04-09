import React, { useContext } from 'react';
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
        marginRight: '10px',
    },
});
const SignupForm = ({ classes, handlerLoginLink, handlerNavigation }) => {
    const authContext = useContext(AuthContext);
    const handlerLogin = authContext.login;

    const handlerSubmit = (e) => {
        e.preventDefault();
        handlerLogin(e);
        handlerNavigation('map');
    };
    return (
        <Paper className={classes.paper}>
            <form onSubmit={handlerSubmit} id="signup_form">
                <Grid container direction="column">
                    <Typography
                        component="h1"
                        variant="h4"
                        align="left"
                        gutterBottom
                    >
                        Регистрация
                    </Typography>
                    <Typography align="left">
                        Уже зарегистрирован?{' '}
                        <Link
                            align="left"
                            underline="none"
                            href="/login"
                            onClick={handlerLoginLink}
                        >
                            Войти
                        </Link>
                    </Typography>
                    <FormControl required>
                        <InputLabel htmlFor="email">
                            Адрес электронной почты
                        </InputLabel>
                        <Input
                            className={classes.input}
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Адрес электронной почты"
                            required
                        />
                    </FormControl>
                    <Grid>
                        <FormControl required>
                            <InputLabel htmlFor="firstname">Имя</InputLabel>
                            <Input
                                className={classes.input}
                                id="firstname"
                                name="firstname"
                                type="text"
                                placeholder="Имя"
                                required
                            />
                        </FormControl>
                        <FormControl required>
                            <InputLabel htmlFor="lastname">Фамилия</InputLabel>
                            <Input
                                className={classes.input}
                                id="lastname"
                                name="lastname"
                                type="text"
                                placeholder="Фамилия"
                                required
                            />
                        </FormControl>
                    </Grid>
                    <FormControl required>
                        <InputLabel htmlFor="signup_password">
                            Пароль
                        </InputLabel>
                        <Input
                            className={classes.input}
                            id="signup_password"
                            name="signup_password"
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
                            Зарегистрироваться
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};
SignupForm.propTypes = {
    classes: PropTypes.object.isRequired,
    handlerLoginLink: PropTypes.func.isRequired,
    handlerNavigation: PropTypes.func.isRequired,
};

export default withStyles(styles)(SignupForm);
