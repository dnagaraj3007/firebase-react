import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mosahay-testing.el.r.appspot.com/api/v1'
});

export default instance;
