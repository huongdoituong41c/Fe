import axios from 'axios';

const url = {
    baseUrl: "http://localhost:8080",
    authLogin: "/user/login",
    register: "/user/registers"
};

const instance = axios.create({
    baseURL: url.baseUrl,
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': ''
    }
});

instance.interceptors.request.use(
    (req) => {
        if (localStorage.getItem('jwt')) {
            const loginInfoStr = JSON.parse(localStorage.getItem('jwt') || '');
            const auth = loginInfoStr.user.token ? `Bearer ${loginInfoStr.user.token}` : '';
            req.headers!["Authorization"] = auth;
        }
        return req;
    },
    (error) => Promise.reject(error)
);

const APIMain = {
    url: url,
    axios: instance,
    get: instance.get,
    post: instance.post,
    put: instance.put,
    delete: instance.delete,
    patch: instance.patch
}

export default APIMain;
