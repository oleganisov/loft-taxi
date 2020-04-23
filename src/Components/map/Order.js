import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Container, Grid, Button, Typography, Paper } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { getIsProfileUpdated } from '../../modules/card';
import SearchForm from './SearchForm';

const styles = () => ({
    text: {
        marginBottom: 30,
    },
    paper: {
        position: 'absolute',
        top: 0,
        left: 20,
        maxWidth: '30%',
        padding: '44px 60px',
        marginTop: '40px',
    },
});

const Order = ({ classes, isProfileUpdated, isOrdered, reset, orderTaxi }) => {
    const handleClick = () => {
        reset();
    };

    function OrderForm() {
        if (!isProfileUpdated) {
            return (
                <Paper className={classes.paper}>
                    <Grid container direction="column">
                        <Typography
                            className={classes.text}
                            component="h1"
                            variant="h4"
                            align="left"
                        >
                            Заполните платежные данные
                        </Typography>
                        <Typography className={classes.text}>
                            Укажите информацию о банковской карте, чтобы сделать
                            заказ.
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            component={RouterLink}
                            to="/profile"
                        >
                            Перейти в профиль
                        </Button>
                    </Grid>
                </Paper>
            );
        }
        if (isOrdered) {
            return (
                <Paper className={classes.paper}>
                    <Grid container direction="column">
                        <Typography
                            className={classes.text}
                            component="h1"
                            variant="h4"
                            align="left"
                        >
                            Заказ размещён
                        </Typography>
                        <Typography className={classes.text}>
                            Ваше такси уже едет к вам. Прибудет приблизительно
                            через 10 минут.
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleClick}
                        >
                            Сделать новый заказ
                        </Button>
                    </Grid>
                </Paper>
            );
        }
        return <SearchForm orderTaxi={orderTaxi} />;
    }
    return (
        <Container className={classes.container}>
            <Paper className={classes.order}>
                <Container className={classes.orderContainer}>
                    <OrderForm />
                </Container>
            </Paper>
        </Container>
    );
};

Order.propTypes = {
    classes: PropTypes.object.isRequired,
    isProfileUpdated: PropTypes.bool.isRequired,
    isOrdered: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
    isProfileUpdated: getIsProfileUpdated(state),
});

export default connect(mapStateToProps, null)(withStyles(styles)(Order));
