import React from "react";
import SearchBar from "./SearchBar";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

function Navbar() {
  return (
    <header>
      <div className="input-group">
        <p>
          <CloudQueueIcon />
        </p>
        <SearchBar />
      </div>
    </header>
  );
}

export default Navbar;
