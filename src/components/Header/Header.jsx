/**
 * This class holds the code for the Header.
 */

import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search'

import useStyles from './styles';
import { Search } from "@material-ui/icons";

const Header = () => {
    // Initialize the styles for use.
    const classes = useStyles();

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
                    {/*<Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search..." classes={{
                                root: classes.inputRoot, input: classes.inputInput
                            }} />
                        </div>
                    {/*</Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;