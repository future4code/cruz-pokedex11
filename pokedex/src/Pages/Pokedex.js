import { useContext } from "react"
import Card from "../Components/Card"
import GlobalStateContext from '../Global/GlobalStateContext'
import { Main } from '../Style/PokedexStyles'
import Loading from '../Components/Loading'

export function Pokedex() {
    const { states } = useContext(GlobalStateContext)

    const pokemons = states.pokedex && states.pokedex.map((poke) => {
        return <Card
            key={poke.name}
            image={poke.sprites.versions['generation-v']['black-white'].animated.front_default}
            name={poke.name}
            type={poke.types[0].type.name}
            poke={poke}
        />

    })
    return (
        <Main>
            {states.pokedex.length === 0 ? <Loading /> : pokemons}
        </Main>
    )

}
export default Pokedex