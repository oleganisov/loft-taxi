import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import {
    Grid,
    Card,
    TextField,
    Typography,
    Paper,
    Button,
} from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { withStyles } from '@material-ui/core/styles';
import { MCIcon } from 'loft-taxi-mui-theme';
import { connect } from 'react-redux';
import moment from 'moment';
import {
    saveCardRequest,
    getCardNumber,
    getCardCVC,
    getCardExpDate,
    getCardName,
} from '../../modules/card';
import { getToken } from '../../modules/auth';
import { useForm, Controller } from 'react-hook-form';

const styles = () => ({
    paper: {
        padding: '44px 60px',
    },
    subtitle: {
        color: 'rgba(0, 0, 0, 0.54)',
        marginBottom: '30px',
    },
    card: {
        padding: '20px 30px',
        display: 'flex',
        flexDirection: 'column',
        width: '320px',
        height: '210px',
        position: 'relative',
    },
    button: {
        marginTop: '30px',
    },
});

const PaymentForm = ({
    classes,
    token,
    cardNumber,
    cardName,
    cvc,
    expDate,
    saveCardRequest,
    setIsCardSaved,
}) => {
    const { control, handleSubmit, setValue, errors } = useForm();

    const onSubmit = (data) => {
        const cardNumber = data.card_number;
        const expiryDate = data.card_date.format('MM/YY');
        const cardName = data.card_owner;
        const cvc = data.card_cvc;

        saveCardRequest({ cardNumber, expiryDate, cardName, cvc, token });
        setIsCardSaved(true);
    };
    const CardNumberFormat = (props) => {
        const { inputRef, onChange, ...rest } = props;
        return (
            <NumberFormat
                {...rest}
                onValueChange={(values) => {
                    setValue('card_number', values.value);
                }}
                format="#### #### #### ####"
                mask="_"
            />
        );
    };
    const CardCVCFormat = (props) => {
        const { inputRef, onChange, ...rest } = props;
        return (
            <NumberFormat
                {...rest}
                onValueChange={(values) => {
                    setValue('card_cvc', values.value);
                }}
                format="###"
                mask="_"
            />
        );
    };

    useEffect(() => {
        cardNumber
            ? setValue('card_number', cardNumber)
            : setValue('card_number', '');
        cardName
            ? setValue('card_owner', cardName)
            : setValue('card_owner', '');
        cvc ? setValue('card_cvc', cvc) : setValue('card_cvc', '');
        expDate
            ? setValue('card_date', moment('01/' + expDate, 'DD/MM/YY'))
            : setValue('card_date', new Date());
    }, [cardNumber, cardName, cvc, expDate, setValue]);

    return (
        <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center" gutterBottom>
                Профиль
            </Typography>
            <Typography align="center" className={classes.subtitle}>
                Способ оплаты
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} data-testid="payment-form">
                <Grid container justify="center" spacing={4}>
                    <Grid item>
                        <Card className={classes.card} elevation={3}>
                            <MCIcon />
                            <Controller
                                as={TextField}
                                margin="normal"
                                label="Номер карты"
                                placeholder="0000 0000 0000 0000"
                                name="card_number"
                                control={control}
                                defaultValue=""
                                InputProps={{
                                    inputComponent: CardNumberFormat,
                                }}
                                InputLabelProps={{
                                    required: true,
                                    shrink: true,
                                }}
                                rules={{
                                    required: 'Обязательно для заполнения',
                                    minLength: {
                                        value: 16,
                                        message: 'должно быть 16 цифр',
                                    },
                                }}
                                error={!!errors.card_number}
                                helperText={
                                    errors.card_number &&
                                    errors.card_number.message
                                }
                            />
                            <Controller
                                as={DatePicker}
                                label="Срок действия"
                                name="card_date"
                                control={control}
                                defaultValue=""
                                margin="normal"
                                format="MM/YY"
                                clearable
                                views={['year', 'month']}
                                InputLabelProps={{
                                    required: true,
                                    shrink: true,
                                }}
                                rules={{
                                    required: 'Обязательно для заполнения',
                                }}
                                error={!!errors.card_date}
                                helperText={
                                    errors.card_date && errors.card_date.message
                                }
                            />
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card} elevation={3}>
                            <Controller
                                as={TextField}
                                margin="normal"
                                label="Имя владельца"
                                placeholder="IVAN IVANOV"
                                name="card_owner"
                                control={control}
                                defaultValue=""
                                InputLabelProps={{
                                    required: true,
                                    shrink: true,
                                }}
                                rules={{
                                    required: 'Обязательно для заполнения',
                                    pattern: {
                                        value: /^[A-Z]+\s[A-Z]+$/,
                                        message: 'формат IVAN IVANOV',
                                    },
                                }}
                                error={!!errors.card_owner}
                                helperText={
                                    errors.card_owner &&
                                    errors.card_owner.message
                                }
                            />
                            <Controller
                                as={TextField}
                                margin="normal"
                                label="CVC"
                                placeholder="CVC"
                                name="card_cvc"
                                // type="password"
                                control={control}
                                defaultValue=""
                                InputProps={{
                                    inputComponent: CardCVCFormat,
                                }}
                                InputLabelProps={{
                                    required: true,
                                    shrink: true,
                                }}
                                rules={{
                                    required: 'Обязательно для заполнения',
                                    pattern: {
                                        value: /^\d{3}$/,
                                        message: 'должно быть 3 цифры',
                                    },
                                }}
                                error={!!errors.card_cvc}
                                helperText={
                                    errors.card_cvc && errors.card_cvc.message
                                }
                            />
                        </Card>
                    </Grid>
                </Grid>
                <Grid align="center">
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        elevation={0}
                        type="submit"
                        data-testid="login-submit"
                    >
                        Сохранить
                    </Button>
                </Grid>
            </form>
        </Paper>
    );
};

PaymentForm.propTypes = {
    classes: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    cardNumber: PropTypes.string,
    cardName: PropTypes.string,
    cvc: PropTypes.string,
    expDate: PropTypes.string,
    saveCardRequest: PropTypes.func.isRequired,
    setIsCardSaved: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    token: getToken(state),
    cardNumber: getCardNumber(state),
    cvc: getCardCVC(state),
    cardName: getCardName(state),
    expDate: getCardExpDate(state),
});
const mapDispatchToProps = {
    saveCardRequest,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(PaymentForm));
