import { Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { StatsService } from '../../../services';

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        margin: '0'
    },
    benchmarkStats: {
        width: '600px'
    },
}));

const UserStats = () => {
    const classes = useStyles();
    const [stats, setStats] = useState('');

    useEffect(() => {
        const a = JSON.parse(localStorage.getItem('user'));

        StatsService.get(a.id).then(res => {
            setStats(res.data)
            console.log(res.data)
        })
    }, [])

    return (
        <div className={classes.root}>
            <h1>Benchmark stats</h1>
            <hr/>
            <Grid container >
                <Grid item sm={6} xs={12}>
                    <p>Clean & Jerk: {stats.cleanAndJerk}kg</p>
                    <p>Snatch: {stats.snatch}kg</p>
                    <p>Overhead squat: {stats.overheadSquat}kg</p>
                    <p>Back squat: {stats.backSquat}kg</p>
                    <p>Front squat: {stats.frontSquat}kg</p>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <p>Deadlift: {stats.deadlift}kg</p>
                    <p>Push press: {stats.pushPress}kg</p>
                    <p>Strict press: {stats.strictPress}kg</p>
                    <p>Bench press: {stats.benchPress}kg</p>
                </Grid>
            </Grid>
        </div>
    );
}
export default UserStats;