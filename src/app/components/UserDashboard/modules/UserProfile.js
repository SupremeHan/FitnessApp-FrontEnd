import { Grid, makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { UserService } from '../../../services';

const useStyles = makeStyles((theme) => ({
    profile: {
        justifyContent: 'center'
    },
    profileImg: {
        width: '200px'
    },
    imgWrapper: {
        justifyContent: 'center'
    },
    profileInfo: {
        flexDirection: 'column'
    }
}))

const UserProfile = () => {
    const classes = useStyles();
    const [user, setUser] = useState('');


    useEffect(() => {
        const a = JSON.parse(localStorage.getItem('user'));

        UserService.get(a.id).then(res => {
            setUser(res.data)
            console.log(res.data)
        })
    }, [])


    return (
        <div>
           <Grid container className={classes.profile}>
               <Grid container item xs={3} className={classes.imgWrapper}>
                <img 
                    src={process.env.PUBLIC_URL + "/assets/img_avatar.png"} 
                    alt="slika"
                    className={classes.profileImg}
                    />
               </Grid>
               <Grid container item xs={3} className={classes.profileInfo}>
                   <h1>{user.name} {user.lastname}</h1>
                   <h4>{user.email}</h4>
               </Grid>
           </Grid>
        </div>
    )
}
export default UserProfile;