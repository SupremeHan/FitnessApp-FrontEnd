import { Grid, makeStyles, Typography} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArticleService } from '../../../services/index';

const useStyles = makeStyles({
    root: {
    },
    article: {
        justifyContent: 'center',
        margin: '50px 0px'
    },
    articleImg: {
        width:"70%",
        height:"250px",
        objectFit:"cover",
    },
    info: {
        flexDirection: 'column',
        margin: '50px 0px'
    },
    heading: {
        textAlign: 'center',
        margin: '20px 0px'
    }
});

const Article = () => {

    const classes = useStyles();
    const [data, setData] = useState([]);
    const photo = "http://localhost:3000/assets/photos/";


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
            <div className={classes.heading}>
            <Typography variant="h2">
                Latest fitness news
            </Typography>
            </div>
            {data.map(item => (
                <Grid container>
                    <Grid container item xs={6} className={classes.article}>
                        <img 
                        src={photo + item.imageUrl} 
                        className={classes.articleImg} 
                        alt="slk" />
                    </Grid>
                    <Grid container item xs={6} className={classes.info}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <Link to={`/api/article/${item.articleId}`}>
                            More info
                            </Link>
                    </Grid>
                </Grid>
            ))}
            <div>
               
            </div>
        </div>
    )

    
}
export default Article;