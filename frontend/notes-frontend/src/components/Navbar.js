import React from "react";
import SearchBar from "./SearchBar";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

function Navbar(props) {
  return (
    <header>
      <div className="input-group">
        <p>
          <CloudQueueIcon />
        </p>
        <SearchBar setNotes={props.setNotes}/>
      </div>
    </header>
  );
}

export default Navbar;
