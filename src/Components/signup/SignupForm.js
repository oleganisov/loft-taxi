import React from 'react';
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
const SignupForm = ({ classes, handlerLoginLink }) => {
    return (
        <Paper className={classes.paper}>
            <form className="login_form">
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
                            Войти
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default withStyles(styles)(SignupForm);
