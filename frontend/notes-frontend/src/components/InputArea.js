import React, { useState, useRef, useEffect } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function InputArea() {
  const [toggled, setToggled] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
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

  function toggleOn() {
    setToggled(true);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    setToggled(false);
    setNote({
      title: "",
      content: ""
    });
  }

  function useToggleOffOnOutsideClick(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setToggled(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useToggleOffOnOutsideClick(wrapperRef);

  return (
    <div className="container">
      <form name="search-form" id="search-form" className="input-area" ref={wrapperRef} onSubmit={onFormSubmit}>

        {toggled &&
          <input
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Title"
          />
        }

        <textarea
          name="content"
          value={note.content}
          rows={toggled ? 3 : 1}
          onChange={handleChange}
          onClick={toggleOn}
          placeholder="Take a note..."
        />

        {toggled &&
          <div className="text-end">
            <button type="submit">
              <Zoom in={toggled}>
                <AddCircleIcon />
              </Zoom>
            </button>
          </div>

        }
      </form>
    </div>
  );
}

export default InputArea;