export default function Pokedex({ pokedex, setPokemon, removeHandler }) {
  return (
    <div className="pokedex">
      <h2>Il tuo Pokedex</h2>
      <div className="pokedex__items">
        {pokedex.length === 0 && <h4>Attualmente non hai pokemon nel tuo pokedex.</h4>}
        {pokedex.map(pokemon => {
          return (
            <div className="pokedex__item" key={pokemon.name}>
              <h3>{pokemon.name}</h3>
              <img src={pokemon.sprites.front_default}></img>
              <button className="small-btn" onClick={() => setPokemon(pokemon)}>Mostra</button>
              <button className="small-btn button-outline" onClick={() => removeHandler(pokemon.name)}>Elimina</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
