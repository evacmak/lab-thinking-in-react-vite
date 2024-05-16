import { useState } from "react";

const SearchBar = () => {
    const [searchBar, setSearchBar] = useState("");

    const handleSearchBar = (event) => {
        setSearchBar(event.target.value)
    }

    return (
        <div>
        <h2>Search</h2>
        <form>
        <input type="search" name="SearchBar" value={searchBar} onChange={handleSearchBar} />
        </form>
         </div>
    )
};

export default SearchBar;