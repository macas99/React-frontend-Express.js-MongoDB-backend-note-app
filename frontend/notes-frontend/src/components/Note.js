import React from "react";
import CancelIcon from '@mui/icons-material/Cancel';

function Note(props) {
  return (
    <div className="animate__animated animate__bounceIn noselect note">
      <div className="delete" onClick={() => { props.removeNote(props.id) }}>
        <CancelIcon />
      </div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
