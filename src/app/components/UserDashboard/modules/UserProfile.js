import React, { useState, useEffect } from 'react';
import { Grid, makeStyles, Button, Paper, TextField, InputAdornment} from '@material-ui/core';
import { UserService } from '../../../services';

const useStyles = makeStyles((theme) => ({
    content: {
        justifyContent: 'center'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        
    },
    profileInfo: {
        paddingLeft: '20px',
    },
    formBtn: {
        marginTop: '20px'
    },
    fontField: {
        marginBottom: '20px'
    }
}))

const UserProfile = () => {
    const initialState = {
        id: null,
        name: "",
        lastname: "",
        age: 0,
        height: 0,
        weight: 0,
        email: "",
    };
    const classes = useStyles();
    const [user, setUser] = useState(initialState);


    useEffect(() => {
        const a = JSON.parse(localStorage.getItem('user'));
        UserService.get(a.id).then(res => {
            setUser(res.data)
        })
    }, []);

    const handleInputChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
            setUser({ ...user, [name]: value });
    }

    const updateUser = () => {
        UserService.edit(user.userId, user)
            .then(res => {
                console.log(res.data);
            })
            .catch(e => {
                console.log(e)
            });
    };

  
    return (
        <div>
            <Grid container className={classes.content}>
                <Grid item xs={12} sm={4}>
                    <img 
                        src={process.env.PUBLIC_URL + "/assets/profile.jpg"} 
                        alt="slika"  
                        className={classes.profileImg}
                    />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.profileInfo}>
                        <form className={classes.form}>
                            <TextField
                              id="standard-multiline-flexible"
                              name="name"
                              label="Name"
                              value={user.name}
                              onChange={handleInputChange}
                              className={classes.fontField}
                            />
                            <TextField
                              id="standard-multiline-flexible"
                              name="lastname"
                              label="Last Name"
                              value={user.lastname}
                              onChange={handleInputChange}
                              className={classes.fontField}
                            />
                            <TextField
                              id="standard-multiline-flexible"
                              name="age"
                              label="Age"
                              value={user.age}
                              onChange={handleInputChange}
                              className={classes.fontField}
                            />
                            <TextField
                              id="standard-multiline-flexible"
                              label="Height"
                              name="height"
                              value={user.height}
                              onChange={handleInputChange}
                              className={classes.fontField}
                              InputProps={{
                                endAdornment: <InputAdornment position="end">Cm</InputAdornment>,
                                }}
                            />
                            <TextField
                              id="standard-multiline-flexible"
                              label="Weight"
                              name="weight"
                              value={user.weight}
                              onChange={handleInputChange}
                              className={classes.fontField}
                              InputProps={{
                                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                                }}
                            />
                      
                        <div className={classes.formBtn}>
                            <Button
                                className={classes.filterBtn} 
                                variant="contained" 
                                type="submit" 
                                onClick={updateUser}
                            >Edit</Button>
                        </div>
                        </form>
                </Grid>
            </Grid>
            
           
        </div>
    )
}
export default UserProfile;