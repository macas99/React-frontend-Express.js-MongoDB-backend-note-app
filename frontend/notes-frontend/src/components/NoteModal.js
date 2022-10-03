import React from "react";

function NoteModal(props) {

  function handleClickOutside(event) {
    if(event.target.classList.contains('modal-container')){
      props.closeModal();
    }
  }
  
  return (
    <div className='modal-container' onClick={handleClickOutside}>
      <div className='note-modal'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default NoteModal;
