import React from "react";
import noteService from "../services/note.service";

function SearchBar(props) {

    function handleChange(event) {
        const query = event.target.value;
        if (query.trim().length) {
            findNote(query);
        } else {
            getAll();
        }
    }

    function findNote(query) {
        noteService.findNote(query)
            .then(response => {
                props.setNotes(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    function getAll() {
        noteService.getAll()
            .then(response => {
                props.setNotes(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div className="rounded search-bar ">
            <input
                type="search"
                className="form-control rounded"
                onChange={handleChange}
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
            />
        </div>
    );
}

export default SearchBar;
