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

export default instance;
