import api from '../config/axios';

const adminLogin = data => {
    return api.post('auth/admin/login', data)
};

const userLogin = data => {
    return api.post('auth/user/login', data)
        .then((res) => {
            console.log(res.data.token)
            if (res.data) {
                localStorage.setItem('user', JSON.stringify(res.data))
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