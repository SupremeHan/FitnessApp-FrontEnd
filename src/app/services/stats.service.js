import api from '../config/axios';

const getAll = () => {
    return api.get("api/stats");
};

const get = id => {
    return api.get(`api/stats/${id}`)
};

export default {
    get,getAll
}
