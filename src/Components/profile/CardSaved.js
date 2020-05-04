import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
    paper: {
        padding: '44px 60px',
    },
    subtitle: {
        color: 'rgba(0, 0, 0, 0.54)',
        marginBottom: '30px',
    },
    button: {
        marginTop: '30px',
    },
});

const CardSaved = ({ classes }) => {
    return (
        <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center" gutterBottom>
                Профиль
            </Typography>
            <Typography align="center" className={classes.subtitle}>
                Способ оплаты
            </Typography>
            <Typography className={classes.text}>
                Платёжные данные обновлены. Теперь вы можете заказывать такси.
            </Typography>
            <Grid align="center">
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    component={RouterLink}
                    to="/map"
                >
                    Перейти на карту
                </Button>
            </Grid>
        </Paper>
    );
};

CardSaved.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardSaved);
