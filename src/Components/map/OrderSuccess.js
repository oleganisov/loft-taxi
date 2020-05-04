import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

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

const OrderSuccess = ({ classes, handleClick }) => {
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
                    Ваше такси уже едет к вам. Прибудет приблизительно через 10
                    минут.
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
};

OrderSuccess.propTypes = {
    classes: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(OrderSuccess);
