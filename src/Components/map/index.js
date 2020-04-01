import React from 'react';

import './index.css';

const Map = ({ navigation }) => {
    if (navigation !== 'map') return null;
    return <h2>Карта</h2>;
};

export default Map;
