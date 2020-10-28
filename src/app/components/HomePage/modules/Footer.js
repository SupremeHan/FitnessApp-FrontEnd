import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: '30px 0px',
        justifyContent: 'center'
    },
    footerLogo: {
        flexDirection: 'column',
    }

}));

const Footer = () => {
    const classes = useStyles();
    return(
    
        <Grid container className={classes.footer}>
            <Grid container item sm={2} xs={12} className={classes.footerCompany}>
                <div>
                    <Typography variant="h6">COMPANY</Typography>
                    <ul>
                        <li>ABOUT</li>
                        <li>PRICING</li>
                        <li>FAQ</li>
                        <li>TERMS & <br/> CONDITIONS</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                
            </Grid>
            <Grid container item sm={2} xs={12} className={classes.footerTrain}>
            <div>
                    <Typography variant="h6">TRAIN</Typography>
                    <ul>
                        <li>TODAY'S WOD</li>
                        <li>AT-HOME WORKOUT</li>
                        <li>SIGN UP FOR PRO</li>
                    </ul>
                </div>
            </Grid>
            <Grid container item sm={2} xs={12} className={classes.footerLogo}>
                <Typography variant="h3">Logo</Typography>
                <Typography variant="h4">Social</Typography>
                <Typography variant="p">
                © COMPANY 2020. ALL RIGHTS RESERVED
                </Typography>
            </Grid>
        </Grid>
        
    )
}

export default Footer;