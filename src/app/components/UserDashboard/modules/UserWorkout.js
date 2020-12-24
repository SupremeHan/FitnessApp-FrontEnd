import React, { useState, useEffect } from 'react';
import { WorkoutService } from '../../../services';
import { Button, Fade, FormControl, Backdrop, Grid, InputAdornment, InputLabel, makeStyles, MenuItem, Modal, Select, TextField, Typography, Card, CardContent, CardActions } from '@material-ui/core';
import ReactPlayer from 'react-player';
import benchmarkService from '../../../services/benchmark.service';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';


const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%"
    },
    workout: {
        justifyContent: 'center',
    },
    workoutInfo: {
        flexDirection: 'column',
    },
    workoutWrapper: {
        marginTop: '10px',
        marginBottom: '20px'
    },
    workoutName: {
        fontSize: '36px',
        marginBottom: '10px'
    },
    workoutWod: {
        marginBottom: '10px'
    },
    workoutDuration: {
        marginBottom: '10px'
    },
    workoutType: {
        marginBottom: '10px'
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'flex-start'
        },
        marginBottom: '30px'
    },
    input: {
        width: '150px',
        marginRight: '30px'
    },
    button: {
        width: '100px',
        height: '30px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '20px'
        }
    },
    type: {
        marginRight: '30px',
        width: '150px'
    },
    modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('xs')]: {
        width: '300px'
      },
      width: '500px'
      
    },
    btnAdd: {
        marginTop: '10px',
        color: '#eb5e28'
    },
    cards: {
        marginBottom: '20px',
        width: '400px',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    cardsBtn: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    items: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    video: {
        marginBottom: '20px'
    }
}));


const UserWorkout = () => {

    const [workout, setWorkout] = useState([]);
    const [duration, setDuration] = useState();
    const [filter , setFilter] = useState(false);
    const [training, setTraining] = useState([]);
    const [type, setType] = useState('');
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [time, setTime] = useState(0);
    const [name, setName] = useState('');

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };


    const getAllWorkouts = () => {
        WorkoutService.getAll()
            .then(res => {
                setWorkout(res.data);
            }).catch(err => {
                console.log(err)
            });          
    }

    useEffect(() => {
        getAllWorkouts()
    }, []);

    const handleTimeChange = event => {
        const vreme = event.target.value;
        console.log(vreme);
        setTime(vreme);
    }
    const handleNameChange = event => {
        const ime = event.target.value;
        console.log(ime)
        setName(ime);
    }

    const handleTimeSubmit = event => {
        event.preventDefault();
        const a = JSON.parse(localStorage.getItem('user'));
        const z = {
            userId: a.id,
            workoutId: workout.workoutId,
            timeCompleted: time,
            name: name
        }
        benchmarkService.addBenchmark(z)
            .then(res => (console.log(res)))
            .catch(err => (console.log(err)))
    }

    const handleChange = event => {
        const duracija = event.target.value;
        setDuration( duracija );
    }

    const handleTypeChange = event => {
        const tip = event.target.value;
        console.log(tip)
        setType(tip);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const x ={
            duration : parseInt(duration),
            type: type
        }

        WorkoutService.search(x)
            .then(res => {
                setTraining(res.data)
                setFilter(true);
            })
            .catch(e => {console.log(e)})
    }

    const modal = () => {
        return(
            <Modal
               aria-labelledby="transition-modal-title"
               aria-describedby="transition-modal-description"
               className={classes.modal}
               open={open}
               onClose={handleClose}
               closeAfterTransition
               BackdropComponent={Backdrop}
               BackdropProps={{
                 timeout: 500,
               }}
             >
               <Fade in={open}>
                
                 <form onSubmit={handleTimeSubmit} className={classes.paper}>
                     <Typography variant="h4">When you finish workout add your score here</Typography>
                   
                    <TextField
                      label="Workout Name"
                      id="standard-start-adornment"
                      onChange={handleNameChange}
                    />
                    <TextField
                      label="Time Completed"
                      id="standard-start-adornment"
                      onChange={handleTimeChange}                
                    />
                    <Button 
                        type="submit" 
                        className={classes.btnAdd}
                        variant="contained"
                        onSubmit={handleClose}
                    >
                        Add score</Button>
                 </form>
               </Fade>
             </Modal>
        );
    }

    return (
        <div className={classes.root}>
           {modal()}
          <Grid container className={classes.workout}>
            <Grid container item md={6} xs={12} className={classes.workoutInfo}>
                
                <form onSubmit={handleSubmit} className={classes.form}>
                    <div>
                    <TextField
                      label="Duration"
                      id="standard-start-adornment"
                      onChange={handleChange}
                      className={classes.input}
                      InputProps={{
                        endAdornment: <InputAdornment position="end">Min</InputAdornment>,
                      }}
                    />
                  </div>
                    <div>
                    <FormControl className={classes.type}>
                      <InputLabel id="demo-simple-select-label">Type</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleTypeChange}
                        value={type}
                      >
                        <MenuItem value={'strenght'}>Strength</MenuItem>
                        <MenuItem value={'endurance'}>Endurance</MenuItem>
                        <MenuItem value={'power'}>Power</MenuItem>
                      </Select>
                    </FormControl>
                    </div>
                    <div>
                     <Button 
                        variant="contained" 
                        color="primary" 
                        type="submit"
                        className={classes.button}
                    >Submit
                    </Button>
                    </div>
                </form>
                       
                {filter === false ?
                <>
                 
                 {workout.map(item => (
                <div className={classes.itemWrapper}>
                    <hr/>
                    <div className={classes.items}>
                        
                        <Card className={classes.cards}>
                        <CardContent>
                           <Typography  variant="h2" className={classes.workoutName}>
                            <strong>
                                {item.name}
                            </strong>
                        </Typography>
            
                            <Typography  variant="body1" className={classes.workoutWod}>
                                <strong>Training</strong><br/> {item.wod}
                            </Typography>
                        
                            <Typography variant="body1" className={classes.workoutDuration}>
                                <strong>Duration</strong><br/> {item.duration}min
                            </Typography>
                            <Typography variant="body1" className={classes.workoutType}>
                                <strong>Type</strong><br/> {item.type}
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.cardsBtn}>
                            <Button 
                                className={classes.btnIn} 
                                type="button" 
                                size="large"
                                color="secondary"
                                onClick={handleOpen}
                                endIcon={<FitnessCenterIcon/>}
                            >
                                 Workout
                            </Button>
                        </CardActions>
                    </Card>
                        
                        
                        
                        <ReactPlayer
                            width="100%"
                            height="350px"
                            url={item.videoLink}
                            className={classes.video}
                        />

                    </div>
                </div>
                    ))}
                </>
                 :
                 <>
                    {training.map(item => (
                    <div className={classes.itemWrapper}>
                    <hr/>
                     <div className={classes.items}>
                        
                        <Card className={classes.cards}>
                        <CardContent>
                           <Typography  variant="h2" className={classes.workoutName}>
                            <strong>
                                {item.name}
                            </strong>
                        </Typography>
            
                            <Typography  variant="body1" className={classes.workoutWod}>
                                <strong>Training</strong><br/> {item.wod}
                            </Typography>
                        
                            <Typography variant="body1" className={classes.workoutDuration}>
                                <strong>Duration</strong><br/> {item.duration}min
                            </Typography>
                            <Typography variant="body1" className={classes.workoutType}>
                                <strong>Type</strong><br/> {item.type}
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.cardsBtn}>
                            <Button 
                                className={classes.btnIn} 
                                type="button" 
                                size="large"
                                color="secondary"
                                onClick={handleOpen}
                                endIcon={<FitnessCenterIcon/>}
                            >
                                 Workout
                            </Button>
                        </CardActions>
                    </Card>
                        
                        
                        
                        <ReactPlayer
                            width="100%"
                            height="350px"
                            url={item.videoLink}
                            className={classes.video}
                        />

                    </div>
                    </div>
                    ))}
                     </>
                 }
               




               
            </Grid>
        </Grid>
        </div>
    );
}
export default UserWorkout;