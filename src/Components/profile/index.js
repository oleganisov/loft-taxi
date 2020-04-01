import React from 'react';

import './index.css';

const Profile = ({ navigation }) => {
    if (navigation !== 'profile') return null;
    return <h2>Профиль</h2>;
};

export default Profile;
