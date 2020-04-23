import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, FormControl, Button, Paper } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import {
    getAddressListRequest,
    getAddressList,
    getRouteRequest,
} from '../../modules/route';

const styles = () => ({
    paper: {
        position: 'absolute',
        top: 0,
        left: 20,
        padding: '44px 60px',
        marginTop: '40px',
    },
    fromControl: {
        minWidth: '384px',
        marginBottom: '30px',
    },
});

const SearchForm = ({
    classes,
    getAddressListRequest,
    getRouteRequest,
    addresses,
}) => {
    const [addressFrom, setAddressFrom] = useState('');
    const [addressTo, setAddressTo] = useState('');

    let addressListFrom = addresses
        .filter((item) => (addressTo ? item !== addressTo.value : true))
        .map((item) => {
            return { label: item, value: item };
        });
    let addressListTo = addresses
        .filter((item) => (addressFrom ? item !== addressFrom.value : true))
        .map((item) => {
            return { label: item, value: item };
        });

    const handlerSubmit = (e) => {
        e.preventDefault();
        const address1 = e.target.address_from.value;
        const address2 = e.target.address_to.value;

        getRouteRequest({ address1, address2 });
    };

    useEffect(() => {
        getAddressListRequest();
    }, [getAddressListRequest]);

    return (
        <Paper className={classes.paper}>
            <form
                id="search-form"
                data-testid="search-form"
                onSubmit={handlerSubmit}
            >
                <Grid container direction="column">
                    <FormControl className={classes.fromControl}>
                        <Select
                            name="address_from"
                            placeholder="Откуда"
                            isClearable
                            options={addressListFrom}
                            value={addressFrom}
                            onChange={setAddressFrom}
                        />
                    </FormControl>
                    <FormControl className={classes.fromControl}>
                        <Select
                            name="address_to"
                            placeholder="Куда"
                            isClearable
                            options={addressListTo}
                            value={addressTo}
                            onChange={setAddressTo}
                        />
                    </FormControl>
                    <Grid align="right">
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            type="submit"
                            data-testid="login-submit"
                        >
                            Вызвать такси
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

SearchForm.propTypes = {
    classes: PropTypes.object.isRequired,
    getAddressListRequest: PropTypes.func.isRequired,
    getRouteRequest: PropTypes.func.isRequired,
    addresses: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    addresses: getAddressList(state),
});
const mapDispatchToProps = {
    getAddressListRequest,
    getRouteRequest,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(SearchForm));
