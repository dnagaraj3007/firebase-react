import axios from 'axios';
import firebase from 'firebase/app';
const instance = axios.create({
    baseURL: 'https://mosahay-testing.el.r.appspot.com/api/v1'
});

instance.interceptors.request.use(async config => {
   config.headers.authorization = await firebase.auth().currentUser.getIdToken()
    return config
}, (error) => {
    return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
    console.log(response);
    if(response.statusCode === 400){
        alert(response.error);
    }
    if(response.status === 401) {
        alert("You are not authorized");
    }
    return response;
}, (error) => {
    if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
});

export default instance;
