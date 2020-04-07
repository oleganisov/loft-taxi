import React from 'react';
import { Logo } from 'loft-taxi-mui-theme';
import { Grid } from '@material-ui/core';
import Background from '../common/Background';
import SignupForm from './SignupForm';

const Signup = ({ handlerLoginLink }) => {
    return (
        <Background>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid xs={3}>
                    <Logo white={true} animated={true} />
                </Grid>
                <SignupForm handlerLoginLink={handlerLoginLink} />
            </Grid>
        </Background>
    );
};

export default Signup;
