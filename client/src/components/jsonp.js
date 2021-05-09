import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

const Jsonp = () => {

    const [flights, setFlights] = useState(false);

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
            width: "50%",
            wordWrap: "break-word",
            '@media (max-width:1024px)': {
                width: "100%",
            },
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

    useEffect(
        () => {
            const resourceId = "e83f763b-b7d7-479e-b172-ae981ddc6de5";
            const numberOfResults = 5;
            const url = "https://data.gov.il/api/3/action/datastore_search";
            const query = "ly";

            const fetchFlightsData = async () => {
                const response = await fetch(url + "?resource_id=" + resourceId + "&limit=" + numberOfResults + "&q=" + query, {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
                const data = await response.json();
                setFlights(data.result.records);
            }
            fetchFlightsData();
        }, []);

    return (
        <>
            <Typography className={classes.title} variant="h6" align="center" gutterBottom>Snippet no. 4: Retrieving JSONP data with just a fetch() request and no 3rd party packages</Typography>
            <div className={classes.margin}>
                <Typography variant="body1" gutterBottom>Unlike what other (outdated?) sources claim, fetch() may indeed be sufficient to deal with JSONP data (and not just JSON):</Typography>
                <Paper className={classes.inlinePaper} variant="outlined" square>
                    {`const resourceId = "e83f763b-b7d7-479e-b172-ae981ddc6de5";`}<br></br>
                    {`const numberOfResults = 5;`}<br></br>
                    {`const url = "https://data.gov.il/api/3/action/datastore_search";`}<br></br>
                    {`const query = "ly";`}<br></br>
                    <br></br>
                    {`const fetchFlightsData = async () => {`}<br></br>
                    {`const response = await fetch(url + "?resource_id=" + resourceId + "&limit=" + numberOfResults + "&q=" + query, {`}<br></br>
                    {`method: 'GET',`}<br></br>
                    {`mode: 'cors',`}<br></br>
                    {`headers: {`}<br></br>
                    {`'Content-Type': 'application/x-www-form-urlencoded'`}<br></br>
                    {`}`}<br></br>
                    {`});`}<br></br>
                    {`const data = await response.json();`}
                </Paper>
                <Typography className={classes.margin} variant="body1" gutterBottom>*Free flights API info (to\from Israel) is publicly available <Link className={classes.link} color="textPrimary" onClick={() => window.open("https://data.gov.il/dataset/flydata/resource/e83f763b-b7d7-479e-b172-ae981ddc6de5", "_blank", "noreferrer")} variant="body1">here</Link>.</Typography>
                <Typography className={classes.margin} variant="body1" gutterBottom>You should see five flight results, searched by the query string "ly", as an example.</Typography>
            </div>

            {flights && (
                flights.map((flight, i) =>
                    <div key={i}>
                        <Typography display="inline" variant="body1" gutterBottom>
                            {flight.CHOPER + " "}
                            {flight.CHFLTN + " "}
                            {new Date(flight.CHPTOL).toLocaleDateString() + " "}
                            {flight.CHRMINE + " "}
                            {flight.CHLOC1D + " "}
                            {flight.CHLOC1T + " "}
                            {flight.CHTERM + " "}
                            {flight.CHAORD + " "}
                            {flight.CHCINT + " "}
                            {flight.CHCKZN + " "}</Typography>
                    </div>
                )
            )}
        </>
    );

}

export default Jsonp;