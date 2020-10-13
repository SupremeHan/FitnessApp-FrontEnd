import api from '../config/axios';

const getAll = () => {
    return api.get("api/article");
};

const get = id => {
    return api.get(`api/article/${id}`)
};

const create = data => {
    return api.post("api/article", data);
};

const edit = (id, data) => {
    return api.patch(`api/article/${id}`, data);
};

export default {
    getAll,
    get,
    create,
    edit
}
