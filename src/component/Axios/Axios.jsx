import axios from 'axios';

const instance = axios.create({
    baseUrl: "https://api.themoviedb.org/3/movie/550",
});


export default instance