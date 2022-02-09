import React, {useState} from "react";


function Search({search, setSearch}) {

  const [searchButton, setSearchButton] = useState('')
  function handleSubmit(e) {
    e.preventDefault();
    setSearch(searchButton);
  }




  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchButton}
        onChange={(e) => setSearchButton(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

