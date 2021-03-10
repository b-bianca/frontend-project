import axios from 'axios'

const api = axios.create({
  baseURL: "https://lamusic.herokuapp.com",
});

export default api