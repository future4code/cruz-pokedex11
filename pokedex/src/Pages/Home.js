import CardPokemon from "../components/CardPokemon"
import useRequestData from "../hooks/useRequestData"
import { Main } from '../styles/pages/HomeStyles'

function Home() {
  const pokemons = useRequestData([], 'pokemon?limit=20&offset=0')


  let pokedex = []
  const addToPokedex = (captured) => {
    pokedex = [...pokedex, captured]
    console.log(pokedex)
  }

  const pokemonsList = pokemons && pokemons.map((pokemon) => {
    return (
      <CardPokemon
        name={pokemon.name}
        onClickAdd={() => addToPokedex(pokemon)}
        onClickDetails={''}
      />
    )
  })

  return <Main>
    {pokemonsList}
  </Main>
}

export default Home