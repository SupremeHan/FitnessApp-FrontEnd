import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthService } from '../../services';
import { Redirect } from 'react-router-dom';

export default function AdminLogin() {

    const { register, handleSubmit, errors } = useForm();
    const [login, setLogin] = useState(false);


    const onSubmit = (data) => {

        AuthService.adminLogin(data)
            .then((res) => setLogin(true))
            .catch((err) => console.log(err))

        console.log(login)
    }


    return (
        <div>
            {login === true ? <Redirect to="/admin/dashboard" /> : null}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Username" name="username" ref={register} />
                <input type="password" placeholder="Password" name="password"
                    ref={register({ required: true, minLength: 3 })} />
                {errors.password && <p>Password is invalid</p>}
                <input type="submit" />

            </form>

        </div>
    );
}