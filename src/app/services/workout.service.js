import api from '../config/axios';

const getAll = () => {
    return api.get("api/workout");
};

const get = id => {
    return api.get(`api/workout/${id}`);
};

const create = data => {
    return api.put("api/workout");
};

const search = (data) => {
    console.log(data)
   return api.post('api/workout/search', { duration: data.duration, type: data.type }, 
   { headers: { "Access-Control-Allow-Origin": "*", } } ) 
  
   // api.post( "http://localhost:5050/search", { data: "data" }, { headers: { "Access-Control-Allow-Origin": "*", } } ) .then(resp => (this.info = resp));
}

export default {
    getAll,
    get,
    create,
    search,
}
