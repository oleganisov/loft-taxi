import React from 'react';

import './index.css';

const Map = ({ navigation }) => {
    if (navigation !== 'map') return null;
    return <div>Страница с картой</div>;
};

export default Map;
