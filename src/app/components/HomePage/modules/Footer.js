import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: '20px 0px',
        justifyContent: 'center'
    },
    ul: {
        margin: '15px 20px'
    }
}));

const Footer = () => {
    const classes = useStyles();
    return(
    
        <Grid container className={classes.footer}>
            <Grid container item sm={2} xs={12} className={classes.footerList}>
                <div>
                    
                    <ul className={classes.ul}>
                        <li><Typography variant="h6">COMPANY</Typography></li>
                        <li><Typography variant="body2">ABOUT</Typography></li>
                        <li><Typography variant="body2">PRICING</Typography></li>
                        <li><Typography variant="body2">FAQ</Typography></li>
                        <li><Typography variant="body2">TERMS & <br/> CONDITIONS</Typography></li>
                        <li><Typography variant="body2">CONTACT</Typography></li>
                    </ul>
                </div>
                
            </Grid>
            <Grid container item sm={2} xs={12} className={classes.footerList}>
            <div>
                    <ul className={classes.ul}>
                        <li><Typography variant="h6">TRAIN</Typography></li>
                        <li> <Typography variant="body2">TODAY'S WOD</Typography></li>
                        <li> <Typography variant="body2">AT-HOME WORKOUT</Typography></li>
                        <li> <Typography variant="body2">SIGN UP FOR PRO</Typography></li>
                    </ul>
                </div>
            </Grid>
            <Grid container item sm={2} xs={12} className={classes.footerList}>
                    <ul className={classes.ul}>
                        <li><Typography variant="h3">Logo</Typography></li>
                        <li><Typography variant="h4">Social</Typography></li>
                        <li>
                            <Typography variant="body2">
                            © COMPANY 2020. ALL RIGHTS RESERVED
                            </Typography>
                        </li>
                    </ul>
            </Grid>
        </Grid>
        
    )
}

export default Footer;