import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProgressBar from './progress-bar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const ProgressBarLoader = () => {

    // Change the names according to what the bars represent.

    const [js, setJS] = useState(30); // Count percent.
    const [intervalIDJS, setIntervalIDJS] = useState(false); // ID for setting\clearing the count interval.

    const [reactJS, setReactJS] = useState(30); // Count percent.
    const [intervalIDReactJS, setIntervalIDReactJS] = useState(false); // ID for setting\clearing the count interval.


    // Optional: Add also here the names of what the bars represent.
    // It's for the containers to adjust automatically to the bars length.

    const maxBarsWidth = (Math.max(js, reactJS) + '%');

    const useStyles = makeStyles((theme) => ({
        margin: {
            marginBottom: theme.spacing(3)
        },
        link: {
            cursor: "pointer",
            textDecoration: "underline"
        },
        progressBarContainer: {

            // Change this to scale the bars' width.
            // Caution: Placing 'maxBarsWidth' here may result in the bars exceeding the display.

            width: '10%'
        },
        innerContainer: {
            width: maxBarsWidth
        }
    }));

    const classes = useStyles();
    

    // Will run once on component load.

    useEffect(() => {
        setIntervalIDJS(setInterval(() => setJS(prevValue => prevValue + 1), 1));
        setIntervalIDReactJS(setInterval(() => setReactJS(prevValue => prevValue + 1), 1));
    }, []);


    // At which percent to stop the count (clearInterval()).

    (js === 110) && clearInterval(intervalIDJS);
    (reactJS === 90) && clearInterval(intervalIDReactJS);

    return (
        <>
        <Typography className={classes.margin} variant="h6" gutterBottom>Code snippet no. 1: Fork and adjust generic progress bars, to add progressing percentage</Typography>
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.progressBarContainer}
        >
            <Grid className={classes.innerContainer} item xs={12}>
                <ProgressBar completed={js} marginTop={0} />
                <ProgressBar completed={reactJS} marginTop={'16px'} /> {/* 16px is based on Material-UI's 8px scaling factor. */}
            </Grid>
        </Grid>
        <Typography variant="body1" gutterBottom>The forked repo is available <Link className={classes.link} color="textPrimary" onClick={() => window.open("https://github.com/O-K-G/simple-progress-bar", "_blank", "noreferrer")} variant="body1">here</Link>.</Typography>
        </>
    );
}

export default ProgressBarLoader;