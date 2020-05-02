import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
    paper: {
        position: 'absolute',
        top: 0,
        left: 20,
        maxWidth: '30%',
        padding: '44px 60px',
        marginTop: '40px',
    },
});

const GoProfile = ({ classes }) => {
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
                    Укажите информацию о банковской карте, чтобы сделать заказ.
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
};

GoProfile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GoProfile);
