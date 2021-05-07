import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';

const DeviceLocation = () => {
    const [coordinates, setCoordinates] = useState(false);

    const useStyles = makeStyles((theme) => ({
        link: {
            cursor: "pointer",
            textDecoration: "underline"
        },
        title: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            '@media (max-width:1024px)': {
                fontSize: "1rem"
            }
        },
        inlinePaper: {
            display: "inline",
            width: "auto",
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1)
        },
        margin: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3)
        },
        dataTitle: {
            textDecoration: "underline"
        }
    }));

    const classes = useStyles();

    useEffect(() => {
        navigator.geolocation.watchPosition((geoData) => {
            setCoordinates(geoData.coords);
        }, (err) => {
            console.warn(err.message);
            setCoordinates(err);
        }, { enableHighAccuracy: true });
    }, []);
    return (
        <>
            <Typography className={classes.title} variant="h6" align="center" gutterBottom>Snippet no. 2: Getting a user's location</Typography>
            <div className={classes.margin}>
                <Typography display="inline" variant="body1" gutterBottom>In Node.js\Express, you can use </Typography><Paper className={classes.inlinePaper} variant="outlined" square>'req.ip'</Paper><Typography display="inline" variant="body1" gutterBottom> (may be a proxy IP instead), or </Typography><Paper className={classes.inlinePaper} variant="outlined" square>'req.header('x-forwarded-for')'</Paper><Typography display="inline" variant="body1" gutterBottom> to get a user's IP address.</Typography>
                <Typography variant="body1" gutterBottom>You can see an exmaple in <Tooltip title="polykick.com GitHub" placement="top-start"><Link className={classes.link} color="textPrimary" onClick={() => window.open("https://github.com/O-K-G/polykick/blob/main/server/src/components/routes/fetchCountry.js", "_blank", "noreferrer")} variant="body1">this</Link></Tooltip> project of mine.</Typography>
                <Typography variant="body1" gutterBottom>Then, using a third party package or API service, you can get some non-accurate geodata.</Typography>
            </div>
            <div className={classes.margin}>
                <Typography display="inline" variant="body1" gutterBottom>The other option is to get the device location (using GPS, etc'... if available) with </Typography><Paper className={classes.inlinePaper} variant="outlined" square>'navigator.geolocation.watchPosition()'</Paper><Typography display="inline" variant="body1" gutterBottom>.</Typography>
                <Typography variant="body1" gutterBottom>This is up to the user though to decide if to allow or deny location access.</Typography>
            </div>
            <div className={classes.margin}>
                <Typography variant="body1" gutterBottom>In this example, if you allowed access, you should see your device position.</Typography>
                <Typography variant="body1" gutterBottom>Otherwise, you'll see an error message.</Typography>
            </div>
            {coordinates.code ? <Typography variant="body1" gutterBottom>{coordinates.message}</Typography> : <div>
                <div>
                    <Typography display="inline" className={classes.dataTitle} variant="body1" gutterBottom>Your latitude:</Typography> <Typography display="inline" variant="body1" gutterBottom>{coordinates.latitude ? coordinates.latitude : "No data provided from the device"}</Typography>
                </div>
                <div>
                    <Typography display="inline" className={classes.dataTitle} variant="body1" gutterBottom>Your longitude:</Typography> <Typography display="inline" variant="body1" gutterBottom>{coordinates.longitude ? coordinates.longitude : "No data provided from the device"}</Typography>
                </div>
                <div>
                    <Typography display="inline" className={classes.dataTitle} variant="body1" gutterBottom>Latitude and longitude accuracy:</Typography> <Typography display="inline" variant="body1" gutterBottom>{coordinates.accuracy ? coordinates.accuracy + " m" : "No data provided from the device"}</Typography>
                </div>
                <div>
                    <Typography display="inline" className={classes.dataTitle} variant="body1" gutterBottom>Your altitude:</Typography> <Typography display="inline" variant="body1" gutterBottom>{coordinates.altitude ? coordinates.altitude : "No data provided from the device"}</Typography>
                </div>
                <div>
                    <Typography display="inline" className={classes.dataTitle} variant="body1" gutterBottom>Altitude accuracy:</Typography> <Typography display="inline" variant="body1" gutterBottom>{coordinates.altitudeAccuracy ? coordinates.altitudeAccuracy : "No data provided from the device"}</Typography>
                </div>
                <div>
                    <Typography display="inline" className={classes.dataTitle} variant="body1" gutterBottom>Your heading:</Typography> <Typography display="inline" variant="body1" gutterBottom>{coordinates.heading ? coordinates.heading : "No data provided from the device"}</Typography>
                </div>
                <div>
                    <Typography display="inline" className={classes.dataTitle} variant="body1" gutterBottom>Your speed:</Typography> <Typography display="inline" variant="body1" gutterBottom>{coordinates.speed ? coordinates.speed : "No data provided from the device"}</Typography>
                </div>
            </div>}
        </>
    );
}

export default DeviceLocation;