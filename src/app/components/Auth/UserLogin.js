import React from 'react';
import useForm from './customHooks/useForm';
import validateLogin from './validate/validateLogin';
import { Redirect } from 'react-router-dom';

const UserLogin = () => {
    const { handleChange, handleSubmit, values, errors, login } = useForm(validateLogin);



    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>Email</label>
                    <div>
                        <input name="email" type="email" value={values.email} onChange={handleChange} />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <div>
                        <input name="password" type="password" value={values.password} onChange={handleChange} />
                    </div>
                </div>
                <button type="submit">Submit</button>

            </form>

        </div>
    )

}
export default UserLogin;