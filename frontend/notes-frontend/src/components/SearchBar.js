import React from "react";

function SearchBar() {
    return (
        <div className="rounded search-bar ">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        </div>
    );
}

export default SearchBar;
