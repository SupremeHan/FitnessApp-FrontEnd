import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Contact from './Contact';

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "center",
        marginBottom: '80px'
    },
    aboutImg: {
        width:"80%",
        objectFit: 'contain'
    },
    aboutInfo: {
        width: "400px",
        textAlign: 'left'
    },
    aboutTitle: {
        margin: '60px 0px'
    },
    aboutInfoImg2: {
        width: "100%",
        height: "700px",
        objectFit: 'cover'
    },
    aboutInfo2: {
        position: 'relative'
    },
    aboutInfoTitle2: {
        position: 'absolute',
        top: "40%",
        right: "30%",
        color: 'white'
    }
}));

const About = () => {
    const classes = useStyles();
    return(
        <div>
            <div className={classes.aboutTitle}>
            <Typography variant="h5" align="center">
                About us
            </Typography>
            <Typography variant="h2" align="center">
                Train Different
            </Typography>
            </div>
            <Grid container className={classes.root}>
                <Grid container item xs={4} className={classes.aboutInfo}>
                    <Typography variant="h3">
                    ADOPTING A <br/>GROWTH <br/>MINDSET.
                    </Typography>
                    <Typography variant="p">
                    CompTrain is for people who understand that mental 
                    toughness is the key to performing at an elite level, 
                    and are committed to getting better at it. Whether your 
                    goal is to push yourself to new heights on a personal level, 
                    compete in your first local competition or podium at the 
                    Games–if you’re trying to become the best version of yourself, 
                    CompTrain is for you.
                    </Typography>
                </Grid>
                <Grid container item xs={4} className={classes.aboutInfoImg}>
                    <img 
                    src={process.env.PUBLIC_URL + "/assets/katrin.jpg"} 
                    alt="slika" 
                    className={classes.aboutImg}
                    />
                </Grid>
            </Grid>
            <div className={classes.aboutInfo2}>
                <img src={process.env.PUBLIC_URL + "/assets/sara.jpg"} alt="slika"  className={classes.aboutInfoImg2}/>
                <Typography 
                variant="h3"
                className={classes.aboutInfoTitle2}
                >
                    MENTAL <br/>TOUGHNESS<br/> IS BUILT<br/> ON BAD DAYS
                </Typography>
            </div>
            <Contact/>
        </div>
    );
}
export default About;