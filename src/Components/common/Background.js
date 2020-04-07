import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';
import backImage from '../../assets/img/login-background.jpg';

const styles = () => ({
    root: {
        backgroundImage: `url(${backImage})`,
        backgroundSize: 'cover',
    },
});

const Background = ({ classes, children }) => {
    return <Paper className={classes.root}>{children}</Paper>;
};

export default withStyles(styles)(Background);
