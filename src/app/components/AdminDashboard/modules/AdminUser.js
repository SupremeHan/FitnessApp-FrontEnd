import React, { useEffect, useState } from 'react';
import { UserService } from '../../../services';


function AdminUser() {
    const [data, setData] = useState([]);

    useEffect(() => {
        UserService.getAll()
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
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Height</th>
                        <th>Weight</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.lastname}</td>
                            <td>{item.age}</td>
                            <td>{item.height}</td>
                            <td>{item.weight}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminUser;