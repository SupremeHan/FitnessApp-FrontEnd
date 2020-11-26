import { Button, Card, CardActions, CardContent, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { StatsService } from '../../../services';
import benchmarkService from '../../../services/benchmark.service';
import workoutService from '../../../services/workout.service';

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
  }
}));

const UserStats = () => {
    const classes = useStyles();
    const [benchmark, setBenchmark] = useState([]);

    const getBenchmark = () => {
        const a = JSON.parse(localStorage.getItem('user'));
        console.log(a.id)
        benchmarkService.getBenchmark(a.id).then(res => {
            console.log(res.data)
            setBenchmark(res.data)
            
        })
    }

    const getWorkouts = () => {
        console.log(benchmark)
        workoutService.getAll().then(res=>(console.log(res.data)));
    }

    useEffect(() => {
        getBenchmark()
    }, []);


const workouts = () => {
    return(
        
             <Grid container className={classes.stats}>
               {benchmark.map(item => (
                <Grid item xs={12} sm={3}>
                    <Card>
                        <CardContent>
                            <Typography>
                                Workout of the day
                            </Typography>
                            <Typography variant="h3">
                                {item.name}
                            </Typography>
                            <Typography>
                                Time completed: {item.timeCompleted} min
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Update</Button>
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