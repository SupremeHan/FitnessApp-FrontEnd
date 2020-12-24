import React, { useState, useEffect } from 'react';
import { makeStyles, Button, Paper, TextField, InputAdornment} from '@material-ui/core';
import { UserService } from '../../../services';

const useStyles = makeStyles((theme) => ({
    content: {
        justifyContent: 'center',
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
        marginBottom: '20px',
    },
    fontSize: {
        fontSize: '1.65rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem'
        }
    },
    profileContent: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%'
    },
    paperForm: {
        padding: '20px',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
    },
    profileImgWrapper: {
        marginRight: '20px',
         [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '20px'
        }
    },
    profileImg: {
        height: 'auto',
        maxWidth: '350px'
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
        <div className={classes.profileContent}>
                    <Paper className={classes.paperForm}>
                        <div className={classes.profileImgWrapper}>
                             <img 
                                 src={process.env.PUBLIC_URL + "/assets/profile.jpg"} 
                                 alt="slika"  
                                 className={classes.profileImg}
                             />
                        </div>
                        <form className={classes.form}>
                            <TextField
                              id="standard-multiline-flexible"
                              name="name"
                              label="Name"
                              value={user.name}
                              onChange={handleInputChange}
                              InputProps={{
                                classes: {
                                  input: classes.fontSize,
                                },
                              }}
                              className={classes.fontField}
                            />
                            <TextField
                              id="standard-multiline-flexible"
                              name="lastname"
                              label="Last Name"
                              value={user.lastname}
                              onChange={handleInputChange}
                              InputProps={{
                                classes: {
                                  input: classes.fontSize,
                                },
                              }}
                              className={classes.fontField}
                            />
                            <TextField
                              id="standard-multiline-flexible"
                              name="age"
                              label="Age"
                              value={user.age}
                              onChange={handleInputChange}
                              InputProps={{
                                classes: {
                                  input: classes.fontSize,
                                },
                              }}
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
                                classes: {
                                  input: classes.fontSize,
                                },
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
                                classes: {
                                  input: classes.fontSize,
                                },
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
                    </Paper>
             
            
           
        </div>
    )
}
export default UserProfile;