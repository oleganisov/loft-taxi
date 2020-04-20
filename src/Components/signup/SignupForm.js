import React from 'react';
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
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUserRequest } from '../../modules/auth';

const styles = () => ({
    paper: {
        padding: '60px 55px',
    },
    input: {
        marginBottom: '30px',
        marginRight: '10px',
    },
});
const SignupForm = ({ classes, registerUserRequest }) => {
    const handlerSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.signup_password.value;
        const name = e.target.firstname.value;
        const surname = e.target.lastname.value;

        registerUserRequest({ email, password, name, surname });
    };

    return (
        <Paper className={classes.paper}>
            <form
                onSubmit={handlerSubmit}
                id="signup-form"
                data-testid="signup-form"
            >
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
                            component={RouterLink}
                            to="/login"
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
                            inputProps={{ 'data-testid': 'email' }}
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
                            data-testid="signup-submit"
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
};

const mapDispatchToProps = {
    registerUserRequest,
};

export default connect(
    null,
    mapDispatchToProps
)(withStyles(styles)(SignupForm));
