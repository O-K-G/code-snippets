import React, { useMemo } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import "@fontsource/roboto";
import ProgressBarLoader from './components/progress-bar-loader';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import DeviceLocation from './components/device-location';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          background: {
            default: prefersDarkMode ? "#000" : '#fff'
          }
        },
      }),
    [prefersDarkMode],
  );

  // Basic CSS.

  const useStyles = makeStyles((theme) => ({
    root: {
      fontFamily: "Roboto",
      width: '100%',
      padding: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <ProgressBarLoader />
        <DeviceLocation />
      </div>
    </ThemeProvider>
  );
}

export default App;
