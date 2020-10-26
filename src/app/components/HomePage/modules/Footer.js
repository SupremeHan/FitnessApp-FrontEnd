import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    footer: {
        justifyContent: 'center',
        backgroundColor: 'gray'
    },
    footerLeft: {
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.down("xs")]: {
            justifyContent: 'center'
        }
    },
    footerRight: {
        [theme.breakpoints.down("xs")]: {
            justifyContent: 'center'
        },
    },

}));

const Footer = () => {
    const classes = useStyles();
    return(
        <Grid container className={classes.footer}>
            <Grid container item sm={3} xs={12} className={classes.footerRight}>
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
                <div>
                    <Typography variant="h6">TRAIN</Typography>
                    <ul>
                        <li>TODAY'S WOD</li>
                        <li>AT-HOME WORKOUT</li>
                        <li>SIGN UP FOR PRO</li>
                    </ul>
                </div>
            </Grid>
            <Grid container item sm={3} xs={12} className={classes.footerLeft}>
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