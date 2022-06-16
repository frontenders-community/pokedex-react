  /* 
  OBBIETTIVO: Attraverso un input e un pulsante submit ottenere il pokemon cercato (immagine a sinistra, stats a destra)

  Componenti: 
  - Pokemon details
    - Deve stampare l'immagine (sprites -fron default) e stats(altezza e peso, nome, statistiche(nome e base stat), nomi abilità)
  - Search bar
    - Input
    - Search button

  Cosa fare:
  - Costruire input e submit button
  - 
  */

import { useState, useEffect } from 'react'
import './App.css'
import SearchForm from './components/SearchForm'
import PokemonDetails from './components/PokemonDetails'
import Pokedex from './components/Pokedex';
import { getPokemon } from './utils/api';

function App() {
  const [pokemon, setPokemon] = useState(null)
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('pokedex')) {
      setPokedex(JSON.parse(localStorage.getItem('pokedex')))
    }
    searchPokemon('charmander');
  }, [])
  
  async function searchPokemon (pokemonName){
    const pokemonResult = await getPokemon(pokemonName);
    setPokemon(pokemonResult);
  } 

  function addToPokedex(){
    const result = pokedex.find(item => item.name === pokemon.name);
    if (result === undefined) {
      localStorage.setItem('pokedex' , JSON.stringify([...pokedex, pokemon]))
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
      <SearchForm search={searchPokemon}/>
      {pokemon && <PokemonDetails pokemon={pokemon} />}
      {pokemon && <button class="add-btn button" onClick={addToPokedex}>Aggiungilo al pokedex</button>}
      <Pokedex pokedex={pokedex} removeHandler={deleteFromPokedex}/>
    </div>
  )
}

export default App
