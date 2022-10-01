import React, { useState, useEffect } from "react";
import Note from "./Note";
import noteService from "../services/note.service";

function NotesArea() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    retrieveNotes()
  }, []);

  function retrieveNotes() {
    noteService.getAll()
      .then(response => setNotes(response.data))
      .catch(e => console.log(e));
  }

  return (
    <div className="container">
      {notes.map(note => {
        return (
          <Note 
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.content}
          />
        )
      })}
    </div>
  );
}

export default NotesArea;
