import { useState } from 'react';
import { AuthService } from '../../../services';
import validateLogin from '../validate/validateLogin';

const useForm = (props, validateLogin) => {
    const [values, setValues] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' });
    const [login, setLogin] = useState(false);

    const handleChange = event => {
        const { name, value } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        AuthService.userLogin(values)
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.data))
                props.history.push('/user/dashboard');
                setLogin(true)
            }).catch(e => {
                setErrors(e);
            })
    }

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        login,
    };
};

export default useForm;