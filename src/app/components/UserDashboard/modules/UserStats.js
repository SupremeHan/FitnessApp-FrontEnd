import { Button, Card,  CardActions, CardContent, Fade, Grid, makeStyles, Modal, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import benchmarkService from '../../../services/benchmark.service';

const useStyles = makeStyles((theme) => ({
  statsInfo: {
      flexDirection: 'column'
  },
  statsContent: {
      color: '#eb5e28'
  },
  stats: {
      gap: '1rem',
      justifyContent: 'center'
  },
  card: {
      border: '1px solid #000',
  },
  cardContent: {
      color: '#eb5e28'
  },
  nameInput: {
      width: '120px',
      fontSize: '20px'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    },
    btns: {
        justifyContent: 'flex-end'
    }
}));

const UserStats = () => {

    const classes = useStyles();
    const [benchmark, setBenchmark] = useState([]);
    const [open, setOpen] = React.useState(false);


    const getBenchmark = () => {
        const a = JSON.parse(localStorage.getItem('user'));
        benchmarkService.getBenchmark(a.id).then(res => {
            setBenchmark(res.data)
            
        })
    }

    useEffect(() => {
        getBenchmark();
    }, []);

    const deleteBenchmark = (id) => {
        console.log(id)
        setBenchmark(benchmark.filter((item) => item.benchmarkId !== id))
    }

const workouts = () => {
    return(
        
            <Grid container className={classes.stats}>
               
               {benchmark.map(item => (
                <Grid item xs={12} sm={5} md={3}>
                    <Card className={classes.card}>    
                        <CardContent >
                            <Typography className={classes.cardContent}>
                                Workout of the day
                            </Typography>
                            <Typography variant="h3">
                                {item.name}
                            </Typography>
                            <Typography variant="h6">
                              Time Completed: {item.timeCompleted} min
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.btns}>
                
                            <Button size="small" onClick={() => deleteBenchmark(item.benchmarkId)}>Remove</Button>
                        </CardActions>
                    </Card>
                </Grid>
               ))}
            </Grid>
        
    )
}

    
    return (
        <div className={classes.root}>
            <div className={classes.statsTitle}>
                <Typography variant="h1" align="center">Benchmark workouts</Typography>
            </div>
            <hr/>
           {workouts()}
            
        </div>
    );
}
export default UserStats;