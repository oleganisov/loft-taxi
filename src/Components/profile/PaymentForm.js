import React, { useState, useEffect } from 'react';
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
    fetchCardRequest,
    getCardNumber,
    getCardCVC,
    getCardExpDate,
    getCardName,
} from '../../modules/card';
import { getToken } from '../../modules/auth';

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

const CardNumberFormat = (props) => {
    const { inputRef, onChange, ...rest } = props;
    return (
        <NumberFormat
            {...rest}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
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
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            format="###"
            mask="_"
        />
    );
};

const PaymentForm = ({
    classes,
    token,
    cardNumber,
    cardName,
    cvc,
    expDate,
    saveCardRequest,
    fetchCardRequest,
}) => {
    const [inputNumber, setInputNumber] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputDate, setInputDate] = useState(new Date());
    const [inputCVC, setInputCVC] = useState('');

    const handlerSubmit = (e) => {
        e.preventDefault();
        const cardNumber = e.target.card_number.value;
        const expiryDate = e.target.card_date.value;
        const cardName = e.target.card_owner.value;
        const cvc = e.target.card_cvc.value;

        saveCardRequest({ cardNumber, expiryDate, cardName, cvc, token });
    };
    useEffect(() => {
        if (token) {
            fetchCardRequest(token);
        }
    }, [fetchCardRequest, token]);

    useEffect(() => {
        cardNumber ? setInputNumber(cardNumber) : setInputNumber('');
        cardName ? setInputName(cardName) : setInputName('');
        cvc ? setInputCVC(cvc) : setInputCVC('');
        expDate
            ? setInputDate(moment('01/' + expDate, 'DD/MM/YY'))
            : setInputDate(new Date());
    }, [cardNumber, cardName, cvc, expDate]);

    return (
        <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center" gutterBottom>
                Профиль
            </Typography>
            <Typography align="center" className={classes.subtitle}>
                Способ оплаты
            </Typography>
            <form onSubmit={handlerSubmit} data-testid="payment-form">
                <Grid container justify="center" spacing={4}>
                    <Grid item>
                        <Card className={classes.card} elevation={3}>
                            <MCIcon />
                            <TextField
                                id="card_number"
                                name="card_number"
                                label="Номер карты"
                                placeholder="0000 0000 0000 0000"
                                required
                                margin="normal"
                                value={inputNumber}
                                onChange={(e) => setInputNumber(e.target.value)}
                                InputProps={{
                                    inputComponent: CardNumberFormat,
                                }}
                            />
                            <DatePicker
                                id="card_date"
                                name="card_date"
                                label="Срок действия"
                                required
                                margin="normal"
                                clearable
                                format="MM/YY"
                                views={['year', 'month']}
                                value={inputDate}
                                onChange={setInputDate}
                            />
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card} elevation={3}>
                            <TextField
                                id="card_owner"
                                name="card_owner"
                                label="Имя владельца"
                                placeholder="Имя владельца"
                                required
                                margin="normal"
                                value={inputName}
                                onChange={(e) => setInputName(e.target.value)}
                            />
                            <TextField
                                id="card_cvc"
                                name="card_cvc"
                                label="CVC"
                                placeholder="CVC"
                                required
                                margin="normal"
                                type="password"
                                value={inputCVC}
                                onChange={(e) => setInputCVC(e.target.value)}
                                InputProps={{
                                    inputComponent: CardCVCFormat,
                                }}
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
    fetchCardRequest: PropTypes.func.isRequired,
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
    fetchCardRequest,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(PaymentForm));
