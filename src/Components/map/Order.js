import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Paper } from '@material-ui/core';
import { getIsProfileUpdated } from '../../modules/card';
import OrderForm from './OrderForm';
import GoProfile from './GoProfile';
import OrderSuccess from './OrderSuccess';

const Order = ({ isProfileUpdated, reset, isOrderedInit = false }) => {
    const [isOrdered, setIsOrdered] = useState(isOrderedInit);

    const handleClick = () => {
        reset();
        setIsOrdered(false);
    };
    const orderTaxi = () => {
        setIsOrdered(true);
    };

    const Layout = () => {
        if (!isProfileUpdated) {
            return <GoProfile />;
        }
        if (isOrdered) {
            return <OrderSuccess handleClick={handleClick} />;
        }
        return <OrderForm orderTaxi={orderTaxi} />;
    };
    return (
        <Container>
            <Paper>
                <Container>
                    <Layout />
                </Container>
            </Paper>
        </Container>
    );
};

Order.propTypes = {
    isProfileUpdated: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    isOrderedInit: PropTypes.bool,
};
const mapStateToProps = (state) => ({
    isProfileUpdated: getIsProfileUpdated(state),
});

export default connect(mapStateToProps, null)(Order);
