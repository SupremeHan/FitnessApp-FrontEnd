import React, { useState, useEffect } from 'react';
import { WorkoutService } from '../../../services';
import ReactPlayer from 'react-player';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    workout: {
        justifyContent: 'center',
        
    },
    workoutInfo: {
        flexDirection: 'column'
    }
}));

const UserWorkout = () => {
    const [workout, setWorkout] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        WorkoutService.getAll()
            .then(res => {
                setWorkout(res.data);
            }).catch(err => {
                console.log(err)
            });
    }, []);


    return (
        <Grid container className={classes.workout}>
            <Grid container item sm={6} xs={12} className={classes.workoutInfo}>
            {workout.map(item => (
                <div key={item.workoutId} >
                    <h1>{item.name}</h1>
                    <p>Training: {item.wod}</p>
                    <p>Duration: {item.duration}min</p>
                    <ReactPlayer
                        width="100%"
                        url={item.videoLink}
                    />
                </div>
            ))}
            </Grid>
        </Grid>
    );
}
export default UserWorkout;