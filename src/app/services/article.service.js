import api from '../config/axios';

const getAll = () => {
    return api.get("api/article");
};

const get = id => {
    return api.get(`api/article/${id}`)
};

const create = data => {
    return api.put("api/article");
};

export default {
    getAll,
    get,
    create
}
