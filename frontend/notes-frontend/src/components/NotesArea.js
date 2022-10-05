import React from "react";
import Note from "./Note";
import Masonry from 'react-masonry-css';
import noteService from "../services/note.service";


function NotesArea(props) {

  const breakpoints = {
    default: 5,
    1335: 4,
    1055: 3,
    795: 2,
    560: 1
  }

  function handleClick(e, note) {
    //check if x-delete-button on top right is being clicked
    if (e.target.parentNode.nodeName !== 'svg' && e.target.nodeName !== 'svg') {
      props.openNote(note);
    }
  }

  function removeNote(id) {
    noteService.deleteNote(id)
      .then(response => {
        console.log(response.data);
        props.refreshNotes();
      })
      .catch(e => {
        console.log(e);
      });
  }

  return (
    <div className="notes-area">
      <div className="row">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {props.notes.map(note => {
            return (
              <div key={note._id} onClick={(event) => handleClick(event, note)} >
                <Note
                  title={note.title}
                  content={note.content}
                  id={note._id}
                  removeNote={removeNote}
                />
              </div>
            )
          })}
        </Masonry>
      </div>
    </div>

  );
}

export default NotesArea;
