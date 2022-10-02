import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import InputArea from './InputArea'
import NotesArea from './NotesArea';
import noteService from "../services/note.service";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    refreshNotes()
  }, []);

  function refreshNotes() {
    noteService.getAll()
      .then(response => setNotes(response.data))
      .catch(e => console.log(e));
  }

  return (
    <div>
      <Navbar />
      <InputArea refreshNotes={refreshNotes} />
      <NotesArea notes={notes} />
    </div>
  );
}

export default App;
