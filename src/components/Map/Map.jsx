/**
 * This class holds the code for the Header.
 */

import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map = ({ setCoordinates, setBounds, coordinates }) => {
    // Initialize the styles for use.
    const classes = useStyles();
    // If the device width is larger than 600px,
    // isMobile will be false.
    const isMobile = useMediaQuery('(min-width:600px')

    return (
        <div className={ classes.mapContainer }>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.TRAVEL_EASY_GOOGLE_MAPS_API_KEY }}
                defaultCenter={ coordinates }
                center={ coordinates }
                defaultZoom={ 14 }
                margin={ [50, 50, 50, 50] }
                options={''}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}

export default Map;