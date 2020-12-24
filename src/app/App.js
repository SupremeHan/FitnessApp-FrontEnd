import React from 'react';
import { template } from '../styles';
import { Router } from 'react-router-dom';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import { theme as ThemeObject} from './utils';

export const theme = createMuiTheme(ThemeObject);

const useStyles = makeStyles((theme) => ({
    '@global': {
        ...template(theme),
    },
    root: {
        background: '#f5f3f4',
        backgroundRepeat: "repeat-y"
    }
}), { name: 'App' });


function App() {
    const classes = useStyles();
    const history = createBrowserHistory();
   
    return(
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Router history={history}>
                    <Routes/>
                </Router>
            </div>
            
        </ThemeProvider>
    );
}

export default App;