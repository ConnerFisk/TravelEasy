/**
 * This class holds the code for the List.
 */

import React, { useState } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';

const List = () => {
    // Initialize the styles for use.
    const classes = useStyles();
    // Initialize states and set the starting value
    // for them.
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    // Dummy variables for places.
    const places = [
        { name: 'Place' },
        { name: 'Pizza' },
        { name: 'Steakhouse' },
        { name: 'Place' },
        { name: 'Pizza' },
        { name: 'Steakhouse' },
        { name: 'Place' },
        { name: 'Pizza' },
        { name: 'Steakhouse' },
    ];


    return (
        <div className={ classes.container }>
            <Typography variant="h4">
                Restaurants, hotels & attractions near you.
            </Typography>
            <FormControl classname={ classes.formControl }>
                <InputLabel>Type</InputLabel>
                { /* Change the state's type when a new selection has been picked */ }
                <Select value={ type } onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl classname={ classes.formControl }>
                <InputLabel>Rating</InputLabel>
                { /* Change the state's type when a new selection has been picked */ }
                <Select value={ rating } onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3</MenuItem>
                    <MenuItem value={4}>Above 4</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {/* Iterate over all of the places.
                    Since we're not deleting items, we can use this method.
                */}
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default List;