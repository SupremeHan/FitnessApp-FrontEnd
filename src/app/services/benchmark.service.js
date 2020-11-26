import api from '../config/axios';

const getBenchmark = (data) => {
    console.log({ userId: data})
    return api.post('api/benchmark/search', { userId: data});
};

const addBenchmark = (data) => {
    return api.post('api/benchmark', data);
}

export default {
    getBenchmark,
    addBenchmark
}