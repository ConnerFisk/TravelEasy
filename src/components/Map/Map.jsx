import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map = () => {
    // Initialize the styles for use.
    const classes = useStyles();
    // If the device widht is larger than 600px,
    // isMobile will be false.
    const isMobile = useMediaQuery('(min-width:600px')

    // Initialize default coordinates.
    const coordinates = { lat: 0, lng: 0 };

    return (
        <div className={ classes.mapContainer }>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.TRAVEL_EASY_GOOGLE_MAPS_API_KEY }}
                defaultCenter={ coordinates }
                center={ coordinates }
                defaultZoom={ 14 }
                margin={ [50, 50, 50, 50] }
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}

export default Map;