import './App.css'
import { useState, useEffect } from 'react'
import { getPokemon } from './utils/api';
import SearchBar from './components/SearchBar';
import PokemonDetail from './components/PokemonDetail';
import Pokedex from './components/Pokedex';

function App() {
  const [pokemon, setPokemon] = useState(null)
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('pokedex')) {
      setPokedex(JSON.parse(localStorage.getItem('pokedex')))
    }
    searchPokemon('charmander');
  }, [])
  
  async function searchPokemon(pokemonName){
    const pokemonResult = await getPokemon(pokemonName);
    setPokemon(pokemonResult);
  } 

  function addToPokedex(){
    const result = pokedex.find(item => item.name === pokemon.name);
    if (result === undefined) {
      localStorage.setItem('pokedex', JSON.stringify([...pokedex, pokemon]))
      setPokedex([...pokedex, pokemon]);
    } else {
      alert('Pokemon già presente')
    }
  }

  function deleteFromPokedex(name){
    const newPokedex = pokedex.filter(item => item.name !== name);
    setPokedex(newPokedex);
    localStorage.setItem('pokedex', JSON.stringify(newPokedex));
  }

  return (
    <div className="poke__app container">
      <SearchBar search={searchPokemon}/>
      {pokemon && <PokemonDetail pokemon={pokemon} addHandler={addToPokedex} />}
      <Pokedex pokedex={pokedex} setPokemon={setPokemon} removeHandler={deleteFromPokedex}/>
    </div>
  )
}

export default App
