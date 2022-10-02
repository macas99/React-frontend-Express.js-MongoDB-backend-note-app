import React, { useState, useEffect } from "react";
import Note from "./Note";
import noteService from "../services/note.service";
import Masonry from 'react-masonry-css'

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

  const breakpoints = {
    default: 5,
    1335: 4,
    1055: 3,
    795: 2,
    505: 1

  }

  return (
    <div className="notes-area">
      <div className="row">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
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
        </Masonry>
      </div>
    </div>

  );
}

export default NotesArea;
