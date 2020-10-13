import api from '../config/axios';

const getAll = () => {
    return api.get("api/user");
};

const get = id => {
    return api.get(`api/user/${id}`)
};

const create = data => {
    return api.put("api/user");
};

export default {
    getAll,
    get,
    create
}
