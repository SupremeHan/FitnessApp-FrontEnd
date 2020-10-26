import React from 'react';
import {  makeStyles } from '@material-ui/core';
import template from '../../styles/template';
import Home from './HomePage/Home';


const useStyles = makeStyles(theme => ({
    '@global': {
        ...template(theme),
    }
}), {name: 'App'});

function App() {
    const classes = useStyles();
    return(
        <ThemeProvider theme={template}>
            <Home/>
        </ThemeProvider>
    );
}

export default App;