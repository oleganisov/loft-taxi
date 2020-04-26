import React from 'react';
import PropTypes from 'prop-types';
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

Background.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
};

export default withStyles(styles)(Background);
