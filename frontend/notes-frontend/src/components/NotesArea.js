import React from "react";
import Note from "./Note";
import Masonry from 'react-masonry-css'

function NotesArea(props) {

  const breakpoints = {
    default: 5,
    1335: 4,
    1055: 3,
    795: 2,
    560: 1
  }

  function handleClick(note) {
    props.openNote(note);
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
              <div key={note._id} onClick={() => handleClick(note)} >
                <Note
                  title={note.title}
                  content={note.content}
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
