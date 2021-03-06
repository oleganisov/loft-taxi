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
import { registerUserRequest } from '../../modules/auth';
import { useForm, Controller } from 'react-hook-form';
import { EMAIL_REGEXP } from '../../helpers/constant';

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
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        const { email, password, name, surname } = data;

        if (email && password && name && surname) {
            registerUserRequest({ email, password, name, surname });
        }
    };

    return (
        <Paper className={classes.paper}>
            <form
                onSubmit={handleSubmit(onSubmit)}
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
                    <Controller
                        as={TextField}
                        className={classes.input}
                        label="Адрес электронной почты"
                        placeholder="Адрес электронной почты"
                        name="email"
                        control={control}
                        defaultValue=""
                        InputLabelProps={{ required: true }}
                        rules={{
                            required: 'Обязательно для заполнения',
                            pattern: {
                                value: EMAIL_REGEXP,
                                message: 'Неверный формат для email',
                            },
                        }}
                        error={!!errors.email}
                        helperText={errors.email && errors.email.message}
                    />
                    <Grid>
                        <Controller
                            as={TextField}
                            className={classes.input}
                            label="Имя"
                            placeholder="Имя"
                            name="name"
                            control={control}
                            defaultValue=""
                            InputLabelProps={{ required: true }}
                            rules={{ required: 'Обязательно для заполнения' }}
                            error={!!errors.name}
                            helperText={errors.name && errors.name.message}
                        />
                        <Controller
                            as={TextField}
                            className={classes.input}
                            label="Фамилия"
                            placeholder="Фамилия"
                            name="surname"
                            control={control}
                            defaultValue=""
                            InputLabelProps={{ required: true }}
                            rules={{ required: 'Обязательно для заполнения' }}
                            error={!!errors.surname}
                            helperText={
                                errors.surname && errors.surname.message
                            }
                        />
                    </Grid>
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
                        rules={{
                            required: 'Обязательно для заполнения',
                            minLength: {
                                value: 6,
                                message: 'Минимальная длина 6 символов',
                            },
                        }}
                        error={!!errors.password}
                        helperText={errors.password && errors.password.message}
                    />
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
    registerUserRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    registerUserRequest,
};

export default connect(
    null,
    mapDispatchToProps
)(withStyles(styles)(SignupForm));
