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

  saveNote(note) {
    return http.post("/", note);
  }

  patchNote(id, note) {
    return http.patch("/" + id, note);
  }

  deleteNote(id) {
    return http.delete("/" + id);
  }
}

export default new NoteService();