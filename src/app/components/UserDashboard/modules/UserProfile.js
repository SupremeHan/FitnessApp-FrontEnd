import React, { useState, useEffect } from 'react';
import { UserService } from '../../../services';


const UserProfile = () => {
    const [user, setUser] = useState({ email: '', id: 0 });
    useEffect(() => {
        var a = localStorage.getItem('myData')
        setUser(a)
        console.log(user.id)
    })

    return (
        <div>
            h1
        </div>
    )
}
export default UserProfile;