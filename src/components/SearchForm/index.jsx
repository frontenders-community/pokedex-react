import {useState} from 'react'

export default function SearchForm({search}) {
  const [searchInput, setSearchInput] = useState('');

  function handleChange(event){
    setSearchInput(event.target.value)
  }

  function handelKeyDown(event){
    if (event.key === "Enter"){
      search(searchInput)
    }
  }

  return (
    <div>
      <h1>Cerca un pokemon</h1>      
      <input type="search" placeholder="e.g. bulbasaur" value={searchInput} onChange={handleChange} onKeyDown={handelKeyDown}></input>
      <button className="button" onClick={() => search(searchInput)}>Cerca</button>
    </div>
  )
}
