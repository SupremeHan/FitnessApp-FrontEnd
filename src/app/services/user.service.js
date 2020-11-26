import api from '../config/axios';

const getAll = () => {
    return api.get("api/user");
};

const get = id => {
    return api.get(`api/user/${id}`)
};

const create = data => {
    return api.put("api/user", data);
};

const edit = (id, data) => {
    return api.patch(`api/user/${id}`, data);
}

export default {
    getAll,
    get,
    create,
    edit
}
