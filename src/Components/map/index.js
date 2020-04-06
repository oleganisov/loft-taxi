import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const styles = {
    width: '100vw',
    height: 'calc(100vh - 70px)',
    position: 'absolute',
};

const Map = () => {
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken =
            'pk.eyJ1Ijoic2F0YW5zZGVlciIsImEiOiJjanAwOGxqYnAyc3J4M3hucmJzaWh4OTg0In0.LSKzagFIJqivwgf4VFjC4Q';
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [30.2656504, 59.8029126],
                zoom: 15,
            });

            map.on('load', () => {
                setMap(map);
                map.resize();
            });
        };

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map]);

    return <div ref={(el) => (mapContainer.current = el)} style={styles} />;
};

export default Map;
