import React, { useState } from 'react';
import { Grid, Card, TextField, Typography, Paper } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { withStyles } from '@material-ui/core/styles';
import { MCIcon } from 'loft-taxi-mui-theme';

const styles = () => ({
    paper: {
        padding: '44px 60px',
    },
    subtitle: {
        color: 'rgba(0, 0, 0, 0.54)',
        marginBottom: '50px',
    },
    card: {
        padding: '30px 30px',
        display: 'flex',
        flexDirection: 'column',
        width: '380px',
        height: '230px',
        position: 'relative',
    },
});

const PaymentForm = ({ classes }) => {
    const [selectedDate, handleDateChange] = useState(new Date());
    return (
        <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center" gutterBottom>
                Профиль
            </Typography>
            <Typography align="center" className={classes.subtitle}>
                Способ оплаты
            </Typography>
            <form>
                <Grid container justify="center" spacing={4}>
                    <Grid item>
                        <Card className={classes.card} elevation={3}>
                            <MCIcon />
                            <TextField
                                id="card_number"
                                label="Номер карты"
                                placeholder="Номер карты"
                                required
                                margin="normal"
                            />
                            <DatePicker
                                id="card_date"
                                label="Срок действия"
                                required
                                margin="normal"
                                clearable
                                format="MM/YY"
                                views={['year', 'month']}
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className={classes.card} elevation={3}>
                            <TextField
                                id="card_owner"
                                label="Имя владельца"
                                placeholder="Имя владельца"
                                required
                                margin="normal"
                            />
                            <TextField
                                id="card_cvc"
                                label="CVC"
                                placeholder="CVC"
                                required
                                margin="normal"
                                type="password"
                            />
                        </Card>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default withStyles(styles)(PaymentForm);
