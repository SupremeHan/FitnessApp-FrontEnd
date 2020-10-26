import React from 'react';
import { Redirect } from 'react-router-dom';
import api from '../config/axios';

const adminLogin = data => {
    return api.post('auth/admin/login', data)
};

const userLogin = data => {
    return api.post('auth/user/login', data)
        .then((res) => {
            if (res.status > '200' || res.status < '400') {
                localStorage.setItem('user', JSON.stringify(res.data))
            }else {
                console.log("Gresska")
            }

            return res.data;
        })
        .catch(e => (
            console.log(e)
        ))
};


const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'))
}

export default {
    adminLogin,
    userLogin,
    logout,
    getCurrentUser
};