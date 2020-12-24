import api from '../config/axios';

const getBenchmark = (data) => {
    console.log({ userId: data})
    return api.post('api/benchmark/search', { userId: data});
};

const addBenchmark = (data) => {
    return api.post('api/benchmark', data);
}

const editBenchmark = (id, data) => {
    return api.patch(`api/benchmark/${id}`, data);
}

const deleteBenchmark = (id) => {
    return api.delete(`api/benchmark/${id}`);
}

export default {
    getBenchmark,
    addBenchmark,
    editBenchmark,
    deleteBenchmark
}