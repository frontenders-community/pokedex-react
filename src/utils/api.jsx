export async function getPokemon(pokemonName){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    const result = await res.json();
    return result;
}