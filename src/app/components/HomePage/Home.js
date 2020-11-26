import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, useMediaQuery } from '@material-ui/core';
import About from './modules/About';
import Footer from './modules/Footer';
import { Link, useHistory } from 'react-router-dom';
import SideBarDrawer from '../AppBar/AppBar';
import { Button } from '../../UI/Button/'
import theme from '../../utils/theme';


const useStyles = makeStyles((theme) => ({
    root: {
        overflowX: 'hidden',
    },
    img: {
        width: "300px"
    },
    landingImg: {
        width: "100%",
        height: "90vh",
        objectFit: "cover"
    },
    landingWrapper: {
        position: "relative"
    },
    landingH2: {
        position: "absolute",
        display:'flex',
        flexDirection: 'column',
        top: "200px",
        left: "15%",   
       
    },
    link: {
        color: '#191919',
        '&:hover': {
            color: '#eb5e28',
            
        }
    },
    btnLink : {
        ':hover': {
            backgoroundColor: '#191919',
        }
    }
}));


function Home() {
    const classes = useStyles();
    let history = useHistory();

    function handleClick() {
        console.log(1232)
        history.push('/login')
    }

    return (
        <div className={classes.root}>
            <SideBarDrawer/>
            <div>
                <img src={process.env.PUBLIC_URL + "/assets/josh.jpg"} alt="slika"  className={classes.landingImg}/>
                <div  className={classes.landingH2}>
                <Typography 
                variant='h1'
                >
                    PUSH HARDER<br />REACH HIGHER <br/> TRAIN SMARTER
                </Typography>
                <Typography variant="body1">
                    Get Daily WOD's in our App Now!
                </Typography>
                <Button
                className={classes.btnLink}
                >
                    <Link to='/login' className={classes.link}> Join Here</Link> 
                </Button>
                </div>
            </div>
            <About/>
            <Footer/>       
        </div>
    )
}

export default Home;