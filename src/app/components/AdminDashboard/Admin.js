import React from 'react';
import AdminArticle from './modules/AdminArticle';
import AdminWorkout from './modules/AdminWorkout';
import AdminUser from './modules/AdminUser';

function Admin() {
    return (
        <div>
            <h3>Articles</h3>
            <hr />
            <AdminArticle />
            <h3>Workouts</h3>
            <hr />
            <AdminWorkout />
            <h3>Users</h3>
            <hr />
            <AdminUser />
        </div>
    );

}

export default Admin;