import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Header from '../common/Header';
import { drawRoute } from './drawRoute';
import Order from './Order';

const styles = {
    width: '100vw',
    height: 'calc(100vh - 66.39px)',
    position: 'absolute',
};

const Map = () => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        mapboxgl.accessToken =
            'pk.eyJ1Ijoic2F0YW5zZGVlciIsImEiOiJjanAwOGxqYnAyc3J4M3hucmJzaWh4OTg0In0.LSKzagFIJqivwgf4VFjC4Q';
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            // See style options here: https://docs.mapbox.com/api/maps/#styles
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [30.2656504, 59.8029126],
            zoom: 15,
        });

        // add navigation control (zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

        // clean up on unmount
        return () => map.remove();
    }, []);

    return (
        <>
            <Header />
            <div style={{ position: 'relative', zIndex: -10 }}>
                <div
                    data-testid="page-map"
                    ref={mapContainerRef}
                    style={styles}
                />
                <Order />
            </div>
        </>
    );
};

export default Map;
