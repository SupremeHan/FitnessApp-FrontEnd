import React, { useState, useEffect } from 'react';
import { WorkoutService } from '../../../services';


const UserWorkout = () => {
    const [workout, setWorkout] = useState([]);

    useEffect(() => {
        WorkoutService.getAll()
            .then(res => {
                setWorkout(res.data);
            }).catch(err => {
                console.log(err)
            });
    }, []);


    return (
        <div>
            {workout.map(item => (
                <div key={item.workoutId}>
                    <h1>{item.name}</h1>
                    <p>{item.wod}</p>
                    <p>{item.duration}min</p>
                </div>
            ))}
        </div>
    );
}
export default UserWorkout;