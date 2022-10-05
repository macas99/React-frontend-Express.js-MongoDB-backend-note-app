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

  function handleClick(e, note) {
    //check if x-delete-button on top right is being clicked
    if (e.target.parentNode.nodeName !== 'svg' && e.target.nodeName !== 'svg') {
      props.openNote(note);
    }
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
