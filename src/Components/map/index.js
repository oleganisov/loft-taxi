import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Header from '../common/Header';
import { drawRoute } from './drawRoute';
import Order from './Order';
import { getCoordinates } from '../../modules/route';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const styles = {
    width: '100vw',
    height: 'calc(100vh - 66.39px)',
    position: 'absolute',
};

const Map = ({ coordinates }) => {
    const [map, setMap] = useState(null);
    const mapContainerRef = useRef(null);
    const [isOrdered, setIsOrdered] = useState(false);

    useEffect(() => {
        mapboxgl.accessToken =
            'pk.eyJ1Ijoic2F0YW5zZGVlciIsImEiOiJjanAwOGxqYnAyc3J4M3hucmJzaWh4OTg0In0.LSKzagFIJqivwgf4VFjC4Q';
        const initializeMap = ({ setMap, mapContainerRef }) => {
            const map = new mapboxgl.Map({
                container: mapContainerRef.current,
                // See style options here: https://docs.mapbox.com/api/maps/#styles
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [30.2656504, 59.8029126],
                zoom: 15,
            });
            // add navigation control (zoom buttons)
            map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

            map.on('load', () => {
                setMap(map);
                map.resize();
            });
        };

        if (!map) initializeMap({ setMap, mapContainerRef });
    }, [map]);

    useEffect(() => {
        if (coordinates.length && map) {
            drawRoute(map, coordinates);
        }
    }, [map, coordinates]);

    const orderTaxi = () => {
        setIsOrdered(true);
    };

    const reset = () => {
        map.removeLayer('route');
        map.removeSource('route');
        setIsOrdered(false);
    };

    return (
        <>
            <Header />
            <div style={{ position: 'relative', zIndex: -10 }}>
                <div
                    data-testid="page-map"
                    ref={(el) => (mapContainerRef.current = el)}
                    style={styles}
                />
                <Order
                    reset={reset}
                    orderTaxi={orderTaxi}
                    isOrdered={isOrdered}
                />
            </div>
        </>
    );
};

Map.propTypes = {
    coordinates: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    coordinates: getCoordinates(state),
});

export default connect(mapStateToProps)(Map);
