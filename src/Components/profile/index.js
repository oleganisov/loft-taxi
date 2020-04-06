import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { AuthContext } from '../authContext';
import Background from '../common/Background';

const Profile = () => {
    const value = useContext(AuthContext);

    return (
        <Background>
            <Grid
                container
                direction="column"
                style={{ minHeight: 'calc(100vh - 70px)' }}
            >
                {JSON.stringify(value)}
            </Grid>
        </Background>
    );
};

export default Profile;
