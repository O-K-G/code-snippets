import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Iframe from 'react-iframe'

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(2)
    },
    title: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        '@media (max-width:1024px)': {
            fontSize: "1rem"
        }
    },
    typography: {
        padding: theme.spacing(2),
    },
}));

const SimplePopover = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const url = "https://www.openstreetmap.org/export/embed.html?bbox=" + props.longitude + "%2C" + props.latitude + "%2C&amp;layer=mapnik";

    return (
        <div className={classes.container}>
        <Typography className={classes.title} variant="h6" align="center" gutterBottom>Snippet no. 3: Displaying location on openstreetmap.org</Typography>
            <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                View your location on openstreetmap.org
      </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Iframe url={url}
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
            </Popover>
        </div>
    );
}

export default SimplePopover;