import React, { useState } from 'react';
import Navbar from './modules/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import About from './modules/About';
import Footer from './modules/Footer';
import { Burger, Menu } from '../Sidebar/index';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        overflowX: 'hidden'
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
        color: "white"
    },
    btn: {
        width:'150px',
        marginTop: '20px'
    }
}));


function Home() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    let history = useHistory();

    function handleClick() {
        history.push('/auth/user/login')
    }

    return (
        <div className={classes.root}>
            <div>
                <Burger open={open} setOpen={setOpen}/>
                <Menu open={open} setOpen={setOpen}/>
                <img src={process.env.PUBLIC_URL + "/assets/josh.jpg"} alt="slika"  className={classes.landingImg}/>
                <div  className={classes.landingH2}>
                <Typography variant='h2'>
                    PUSH HARDER<br />REACH HIGHER <br/> TRAIN SMARTER
                </Typography>
                <Typography variant="p" className={classes.p}>
                    Get Daily WOD's in our App Now!
                </Typography>
                <Button 
                variant="contained"
                color="primary"
                size="large"
                onClick={handleClick}
                className={classes.btn}
                >
                    Join Here
                </Button>
                </div>
            </div>
            <About/>
            <Footer/>       
        </div>
    )
}

export default Home;