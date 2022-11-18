const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemon(pokemonName) {
  try {
    const res = await fetch(`${BASE_URL}/${pokemonName.toLowerCase()}`);
    if (res.ok) {
      const result = await res.json();
      return result;
    } else {
      return {
        error: true,
        msg: "Non ho trovato nulla con questo nome",
      };
    }
  } catch (error) {
    return {
      error: true,
      msg: "Non ho trovato nulla con questo nome",
    };
  }
}