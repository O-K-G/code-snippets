import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const DeepNest = () => {

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
            maxWidth: '50%',
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1)
        },
        margin: {
            marginTop: theme.spacing(3)
        },
        dataTitle: {
            textDecoration: "underline"
        }
    }));

    const classes = useStyles();

    return (
        <>
            <div className={classes.title}>
                <Typography display="inline" variant="h6" gutterBottom>
                    ES2020's Optional Chaining
        </Typography>
            </div>
            <Paper className={classes.inlinePaper} variant="outlined" square>
                <Typography variant="body1" gutterBottom>{"const x = {prop1: {prop2: 300}};"}</Typography>
                <Typography className={classes.margin} variant="body1" gutterBottom>{"console.log(x.prop3.prop4);"}</Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>{"// Uncaught TypeError: Cannot read property 'prop4' of undefined"}</Typography>
                <Typography className={classes.margin} variant="body1" gutterBottom>{"console.log(x?.prop3?.prop4);"}</Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>{"// undefined"}</Typography>
                <Typography className={classes.margin} variant="body1" gutterBottom>{"console.log(x?.prop1?.prop2);"}</Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>{"// 300"}</Typography>
            </Paper>
            <div className={classes.title}>
            <Typography display="inline" variant="h6" gutterBottom>
            ES2020's Nullish Coalescing (?? in contrast to ||)
        </Typography>
        </div>
        <Paper className={classes.inlinePaper} variant="outlined" square>
                <Typography variant="body1" gutterBottom>{"console.log(null ?? 'some truthy value');"}</Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>{"// some truthy value"}</Typography>
                <Typography className={classes.margin} variant="body1" gutterBottom>{"console.log(false ?? 'some truthy value');"}</Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>{"// false"}</Typography>
            </Paper>
        </>
    );
}

export default DeepNest;