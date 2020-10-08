import React, { useEffect, useState } from 'react';
import { WorkoutService } from '../../../services';


function AdminWorkout() {
    const [data, setData] = useState([]);

    useEffect(() => {
        WorkoutService.getAll()
            .then(res => {
                setData(res.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>WOD</th>
                        <th>Duration</th>
                        <th>VideoLink</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.workoutId}>
                            <td>{item.name}</td>
                            <td>{item.wod}</td>
                            <td>{item.duration}</td>
                            <td>{item.videoLink}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminWorkout;