import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const PlaceDetails = ({ place }) => {
    // Initialize the styles for use.
    const classes = useStyles();
    return (
        <Card elevation={ 6 }>
            <CardMedia 
                style={{ height: 350 }}
                image={ place.photo? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg' }
                title={ place.name }
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    { place.name }
                </Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterButtom variante="subtitle1">{ place.price_level }</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterButtom variante="subtitle1">{ place.ranking }</Typography>
                </Box>
                {/* If there are awards for the place, display them. */}
                {place?.awards?.map((award) => (
                    <Box my={1} display="flex" justifyContent="space-between">
                        <img src={award.images.small} alt={award.display_name}/>
                        <Typography variante="subtitle2" color="textSecondary">
                            { award.display_name }
                        </Typography>
                    </Box>
                ))}
                {/* If there are cuisine tags, display them. */}
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={ name } size="small" label={ name } className={ classes.chip }/>
                ))}
                {/* If there is an address, display it. */}
                {place?.address && (
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={ classes.subtitle }>
                        <LocationOnIcon />
                        { place.address }
                    </Typography>
                )}
                {/* If there is a phone number, display it. */}
                {place?.phone && (
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={ classes.spacing }>
                        <PhoneIcon />
                        { place.phone }
                    </Typography>
                )}
                {/* Display the websites for the place. */}
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default PlaceDetails;