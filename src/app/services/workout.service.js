import api from '../config/axios';

const getAll = () => {
    return api.get("api/workout");
};

const get = id => {
    return api.get(`api/workout/${id}`)
};

const create = data => {
    return api.put("api/workout");
};

export default {
    getAll,
    get,
    create
}
