import api from '../config/axios';
import authHeader from './auth.header';

const getAll = () => {
    return api.get("api/user" + 'admin', { headers: authHeader() });
};

const get = id => {
    return api.get(`api/user/${id}` + 'user', { headers: authHeader() })
};

const create = data => {
    return api.put("api/user");
};

export default {
    getAll,
    get,
    create
}
