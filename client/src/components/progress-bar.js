import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const ProgressBar = (props) => {

    const useStyles = makeStyles((theme) => ({
        containerStyles: {
            height: '100%',
            width: 'auto',
            marginTop: props.marginTop,
            '@media (max-width:1024px)': {
                minWidth: "500%",
            }

            // // Optional
            // backgroundColor: "#e0e0de",
            // borderRadius: 50,
        },
        fillerStyles: {
            width: props.completed + '%',
            background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
            borderRadius: '15px',
            textAlign: 'right',
            transition: 'width 1s ease-in-out'
        },
        labelStyles: {
            paddingLeft: 'auto',
            paddingRight: 'auto',
            color: "#fff",
            marginTop: 0,
            marginLeft: 0,
            marginRight: theme.spacing(1),
            marginBottom: 0,
            paddingTop: '1px'
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.containerStyles}>
            <div className={classes.fillerStyles}>
                <Typography className={classes.labelStyles} variant="body1" gutterBottom>{props.completed}%</Typography>
            </div>
        </div>
    );
};

export default ProgressBar;