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
import { errorMsg } from '../../helpers/helpFunc';

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
}) => {
    const { control, handleSubmit, setValue, errors } = useForm();

    const onSubmit = (data) => {
        const cardNumber = data.card_number;
        const expiryDate = data.card_date.format('MM/YY');
        const cardName = data.card_owner;
        const cvc = data.card_cvc;

        saveCardRequest({ cardNumber, expiryDate, cardName, cvc, token });
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
                                required
                                defaultValue=""
                                InputProps={{
                                    inputComponent: CardNumberFormat,
                                }}
                                InputLabelProps={{ shrink: true }}
                                rules={{ minLength: 16 }}
                                error={!!errors.card_number}
                                helperText={
                                    errors.card_number && 'должно быть 16 цифр'
                                }
                            />
                            <Controller
                                as={DatePicker}
                                label="Срок действия"
                                name="card_date"
                                control={control}
                                required
                                defaultValue=""
                                margin="normal"
                                format="MM/YY"
                                clearable
                                views={['year', 'month']}
                                InputLabelProps={{ shrink: true }}
                                rules={{ required: true }}
                                error={!!errors.card_date}
                                helperText={errorMsg(errors.card_date)}
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
                                required
                                defaultValue=""
                                InputLabelProps={{ shrink: true }}
                                rules={{ pattern: /^[A-Z]+\s[A-Z]+$/ }}
                                error={!!errors.card_owner}
                                helperText={
                                    errors.card_owner && 'формат IVAN IVANOV'
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
                                required
                                defaultValue=""
                                InputProps={{
                                    inputComponent: CardCVCFormat,
                                }}
                                InputLabelProps={{ shrink: true }}
                                rules={{
                                    pattern: /^\d{3}$/,
                                }}
                                error={!!errors.card_cvc}
                                helperText={
                                    errors.card_cvc && 'должно быть 3 цифры'
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
