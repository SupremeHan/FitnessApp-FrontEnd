import { Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { Button } from '../../../UI/Button';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    form: {
        justifyContent: 'center',
        margin: '60px 0px',
        
    },
    formInput: {
        flexDirection: 'column',
        justifyContent: 'center',
        width:'70%'
    },   
    formTitle: {
        alignItems: 'center'
    }
}));

const Contact = () => {
    const classes = useStyles();
    return(
        <div>
            <Grid container className={classes.form}>
                <Grid container item xs={12} sm={3} className={classes.formTitle}>
                    <Typography variant="h3">Stay in touch with latest fittnes news</Typography>
                </Grid>
                <Grid container item xs={12} sm={3} className={classes.formInput}>
                    <TextField id="standard-basic" label="First Name" />
                    <TextField id="standard-basic" label="Last Name" />
                    <TextField id="standard-basic" label="Email" />
                <Button>
                    Subscribe
                </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Contact;