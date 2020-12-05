import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArticleService } from '../../services/index';
import SideBarDrawer from '../AppBar/AppBar';

const useStyles = makeStyles(theme => ({
    root: {
        justifyContent:'center'
    },
    article: {
        justifyContent: 'center',
        margin: '50px 0px',
        alignItems: 'center',
    },
    articleImg: {
        width:"100%",
        height:"auto",
        objectFit:"cover",
    },
    info: {
        flexDirection: 'column',
        margin: '50px 0px',
        [theme.breakpoints.down('md')]: {
            margin: '50px 20px'
        }
    },
    infoTitle: {

    },
    heading: {
        textAlign: 'center',
        margin: '20px 0px'
    },
    hr: {
        width: '80%',
        marginTop: '20px',
        marginBottom: '20px',
        [theme.breakpoints.down('md')]: {
            marginBottom: '20px'
        }
    },
    moreLink: {
        fontSize: '1.3rem',
        color: '#eb5e28',
        marginTop: '10px',
    }
}));

const Article = () => {
  
    const classes = useStyles();
    const [data, setData] = useState([]);
    const photo = "http://localhost:5000/assets/photos/";


    useEffect(() => {
        ArticleService.getAll()
            .then(res => {
                setData(res.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <SideBarDrawer/>
            <div className={classes.heading}>
            <Typography variant="h1">
                Latest fitness news
            </Typography>
            </div>
            {data.map(item => (
                <Grid container className={classes.root}>
                    <Grid container item xs={12} md={3} className={classes.article}>
                        <img 
                        src={photo + item.imageUrl} 
                        className={classes.articleImg} 
                        alt="slk" />
                    </Grid>
                    <Grid container item xs={12} md={3} className={classes.info}>
                        <Typography variant="h3" className={classes.infoTitle}>{item.title}</Typography>
                        <Typography variant="body1" className={classes.infoDesc}>{item.description.substr(0, item.description.indexOf('.'))}</Typography>
                        <Link to="#" className={classes.moreLink}>
                            More info
                            </Link>
                        
                    </Grid>
                    <Divider className={classes.hr} variant="middle" />
                </Grid>
            ))}
            <div>
               
            </div>
        </div>
    )

    
}
export default Article;