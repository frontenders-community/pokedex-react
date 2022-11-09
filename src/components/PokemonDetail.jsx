import {useState, useEffect} from 'react'

export default function PokemonDetail({ pokemon, addHandler }) {
  const [pokemonImg, setPokemonImg] = useState(null);

  useEffect(() => {
    setPokemonImg(pokemon.sprites.front_default)
  }, [pokemon])
  
  return (
    <div className='poke__container'>
      <h2>Ecco i tuoi risultati per [{pokemon.name}]</h2>
      <div className="poke__info row">
        <div className="column">
          <h4>Nome: {pokemon.name}</h4>
        </div>
        <div className="column">
          <h4>Peso: {pokemon.weight}</h4>
        </div>
        <div className="column">
          <h4>Altezza: {pokemon.height}</h4>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="poke__image column">
          <img src={pokemonImg}/>
          <div className="poke__image__buttons">
            <button className="button button-outline" onClick={() => setPokemonImg(pokemon.sprites.front_default)}>Default</button>
            <button className="button button-outline" onClick={() => setPokemonImg(pokemon.sprites.front_shiny)}>Shiny</button>
          </div>
        </div>
        <div className="poke__stats column">
          <h3>Statistiche</h3>
          {
            pokemon.stats.map(stat =>{
              return(
                <div key={stat.stat.name}>
                  <label>{stat.stat.name}</label>
                  <progress value={stat.base_stat} max="100"></progress>
                </div>
              )
            })
          }
        </div>
      </div>
      <button className="add-btn" onClick={addHandler}>Aggiungilo al pokedex</button>
    </div>
  )
}
