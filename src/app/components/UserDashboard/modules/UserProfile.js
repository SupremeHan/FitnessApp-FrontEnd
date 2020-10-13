import React, { useState, useEffect } from 'react';

const UserProfile = () => {
    const [user, setUser] = useState({ identity: '', userId: 0 });

    const getLocalData = () => {
        var a = localStorage.getItem('user')
        setUser(a)
        console.log(a)
    }

    useEffect(() => {
        getLocalData()
    })

    return (
        <div>
            {user.identity}
        </div>
    )
}
export default UserProfile;