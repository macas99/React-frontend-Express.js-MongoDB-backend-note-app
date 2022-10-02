import React, { useState, useEffect } from "react";
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

  return (
    <div className="notes-area">
      <div className="row">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {props.notes.map(note => {
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
