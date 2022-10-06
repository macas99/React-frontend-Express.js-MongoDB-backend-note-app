import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import InputArea from './InputArea'
import NotesArea from './NotesArea';
import noteService from "../services/note.service";
import NoteModal from './NoteModal';

function App() {
  const [notes, setNotes] = useState([]);
  const [noteModal, setModal] = useState({
    isOpen: false,
    title: "",
    content: "",
    id: 0
  });

  useEffect(() => {
    refreshNotes()
  }, []);

  function refreshNotes() {
    noteService.getAll()
      .then(response => setNotes(response.data))
      .catch(e => console.log(e));
  }

  function openNote(note) {
    setModal({
      isOpen: true,
      title: note.title,
      content: note.content,
      id: note._id
    });
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (noteModal.isOpen) {
      setModal({
        isOpen: false,
        title: "",
        content: ""
      });
    }
    document.body.style.overflow = 'unset';
  }

  return (
    <div>
      <Navbar setNotes={setNotes} />
      <InputArea refreshNotes={refreshNotes} />
      <NotesArea notes={notes} openNote={openNote} refreshNotes={refreshNotes} />
      {noteModal.isOpen && (
        <NoteModal
          title={noteModal.title}
          content={noteModal.content}
          id={noteModal.id}
          closeModal={closeModal}
          refreshNotes={refreshNotes} />
      )}
    </div>
  );
}

export default App;
