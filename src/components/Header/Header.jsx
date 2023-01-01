/**
 * This class holds the code for the Header.
 */

import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search'

import useStyles from './styles';
import { Search } from "@material-ui/icons";

const Header = ({ setCoordinates }) => {
    // Initialize the styles for use.
    const classes = useStyles();
    const [autocomplete, setAutoComplete] = useState(null);

    const onLoad = (autoC) => setAutoComplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates({ lat, lng });
    }

    return (
        <AppBar position="static">
            <Toolbar className= {classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Easy
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore the world.
                    </Typography>
                    <Autocomplete onLoad={ onLoad } onPlaceChanged={ onPlaceChanged }>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." classes={{
                                root: classes.inputRoot, input: classes.inputInput
                            }} />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;