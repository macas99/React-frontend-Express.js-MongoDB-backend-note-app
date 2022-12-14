import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import noteService from "../services/note.service";

function NoteModal(props) {
  const [note, setNote] = useState({
    title: props.title,
    content: props.content
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleClickOutside(event) {
    if (event.target.classList.contains('modal-container')) {
      props.closeModal();
    }
  }

  function onFormSubmit(event) {
    event.preventDefault();

    const editedNote = {
      ...note,
      title: document.getElementById("myContentEditable").innerHTML
    }

    noteService.patchNote(props.id, editedNote)
      .then(response => {
        console.log(response.data);
        props.refreshNotes();
      })
      .catch(e => {
        console.log(e);
      });

    props.closeModal();
  }

  return (
    <div className='modal-container' onClick={handleClickOutside}>
      <div className='note-modal'>
        <div className="text-end" >
          <CloseIcon className="close-modal-btn" onClick={props.closeModal} />
        </div>

        <form name="search-form" id="search-form" className="modal-input" onSubmit={onFormSubmit}>

          <p
            name="title"
            id="myContentEditable"
            contentEditable="true"
            spellcheck="false"
            suppressContentEditableWarning={true}>
            {note.title}
          </p>

          <textarea
            className="input-content"
            name="content"
            value={note.content}
            placeholder="Take a note..."
            onChange={handleChange}
            spellcheck="false"
          />

          <div className="text-end">
            <button type="submit">
              <AddCircleIcon />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default NoteModal;
