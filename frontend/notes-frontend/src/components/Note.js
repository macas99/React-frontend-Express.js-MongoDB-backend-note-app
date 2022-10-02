import React from "react";

function Note(props) {
  return (
    <div className="animate__animated animate__bounceIn note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
