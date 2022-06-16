import './index.css'

export default function Pokedex({ pokedex, removeHandler }) {
  return (
    <div className="pokedex">
      <h2>Il tuo Pokedex</h2>
      <div className="pokedex__items">
        {pokedex.map(pokemon => {
          return (
            <div className="pokedex__item" key={pokemon.name}>
              <h3>{pokemon.name}</h3>
              <img src={pokemon.sprites.front_default}></img>
              <button class="remove-btn button button-outline" onClick={() => removeHandler(pokemon.name)}>Elimina</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
