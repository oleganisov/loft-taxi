import React from 'react';

import './index.css';

const Profile = ({ navigation }) => {
    if (navigation !== 'profile') return null;
    return <div>Страница профиля</div>;
};

export default Profile;
