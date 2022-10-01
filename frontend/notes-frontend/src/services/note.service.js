import axios from 'axios';

const http = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-type": "application/json"
  }
});

class NoteService {


  getAll() {
    return http.get();
  }

}

export default new NoteService;