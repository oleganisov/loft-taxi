import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    TextField,
    Button,
    Typography,
    Link,
    Paper,
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUserRequest } from '../../modules/auth';
import { useForm, Controller } from 'react-hook-form';
import { errorMsg } from '../../helpers/helpFunc';
import { EMAIL_REGEXP } from '../../helpers/constant';

const styles = () => ({
    paper: {
        padding: '60px 55px',
    },
    input: {
        marginBottom: '30px',
    },
});

const LoginForm = ({ classes, loginUserRequest }) => {
    const { control, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;

        if (email && password) {
            loginUserRequest({ email, password });
        }
    };
    return (
        <Paper className={classes.paper}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                id="login-form"
                data-testid="login-form"
            >
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
                            component={RouterLink}
                            to="/signup"
                        >
                            Зарегистрируйтесь
                        </Link>
                    </Typography>
                    <Controller
                        as={TextField}
                        className={classes.input}
                        label="Имя пользователя"
                        placeholder="Имя пользователя"
                        name="email"
                        // type="email"
                        control={control}
                        defaultValue=""
                        InputLabelProps={{ required: true }}
                        rules={{
                            required: true,
                            pattern: EMAIL_REGEXP,
                        }}
                        error={!!errors.email}
                        helperText={errorMsg(errors.email)}
                    />
                    <Controller
                        as={TextField}
                        className={classes.input}
                        label="Пароль"
                        placeholder="Пароль"
                        name="password"
                        type="password"
                        control={control}
                        defaultValue=""
                        InputLabelProps={{ required: true }}
                        rules={{ required: true, minLength: 6 }}
                        error={!!errors.password}
                        helperText={errorMsg(errors.password)}
                    />
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
    loginUserRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    loginUserRequest,
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(LoginForm));
