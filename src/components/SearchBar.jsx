import {useState} from 'react'

export default function SearchBar({ search, errorMessage }) {
  const [searchInput, setSearchInput] = useState('');

  function handleChange(event){
    setSearchInput(event.target.value)
  }

  function handleKeyDown(event){
    if (event.key === "Enter"){
      handleSearch();
    }
  }

  function handleSearch() {
    if (searchInput !== "") {
      search(searchInput);
      setSearchInput("");
    }
  }

  return (
    <div>
      <h1>Cerca un pokemon</h1>      
      <input
        type="search"
        placeholder="e.g. bulbasaur"
        value={searchInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></input>
      { errorMessage && <p>{errorMessage}</p> }
      <button className="button" onClick={handleSearch}>Cerca</button>
    </div>
  )
}
